"use strict";

async function loadPdfLibrary() {
  if (window.PDFLib) return window.PDFLib;
  const script = document.createElement("script");
  script.src = "assets/pdf-lib.min.js";
  await new Promise((resolve, reject) => {
    script.onload = resolve;
    script.onerror = () => {
      script.remove();
      reject(new Error("PDF-Bibliothek konnte nicht geladen werden."));
    };
    document.head.append(script);
  });
  return window.PDFLib;
}

function wrapPdfText(text, maxWidth, measure) {
  const lines = [];
  let line = "";
  for (const word of text.trim().split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (measure(candidate) <= maxWidth) {
      line = candidate;
      continue;
    }
    if (line) lines.push(line);
    line = "";
    for (const character of word) {
      if (line && measure(line + character) > maxWidth) {
        lines.push(line);
        line = "";
      }
      line += character;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function createCoursePdf({ name, className, date, stationTitles, practice }) {
  const { PDFDocument, StandardFonts, PageSizes, rgb } = await loadPdfLibrary();
  const pdf = await PDFDocument.create();
  const page = pdf.addPage(PageSizes.A4);
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const ink = rgb(0.08, 0.17, 0.2);
  const teal = rgb(0.04, 0.37, 0.41);
  const paperWidth = page.getWidth();
  const left = 49;
  const textWidth = paperWidth - 2 * left;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  function measure(text, size, font) {
    try {
      return font.widthOfTextAtSize(text, size);
    } catch {
      context.font = `${font === bold ? "bold " : ""}${size}px Arial, sans-serif`;
      return context.measureText(text).width;
    }
  }

  async function drawLine(text, x, y, size, font = regular, color = ink) {
    try {
      font.encodeText(text);
    } catch {
      // Use the browser's system fonts for names or answers outside WinAnsi.
      const scale = 3;
      const width = Math.ceil(measure(text, size, font)) + 2;
      const height = Math.ceil(size * 1.75);
      canvas.width = width * scale;
      canvas.height = height * scale;
      context.scale(scale, scale);
      context.font = `${font === bold ? "bold " : ""}${size}px Arial, sans-serif`;
      context.fillStyle = "#152b34";
      context.fillText(text, 0, size);
      const image = await pdf.embedPng(canvas.toDataURL("image/png"));
      page.drawImage(image, { x, y: y + size - height, width, height });
      return;
    }
    page.drawText(text, { x, y, font, size, color });
  }

  let y = page.getHeight() - 70;
  async function paragraph(text, { size = 11, font = regular, color = ink, indent = 0 } = {}) {
    for (const line of wrapPdfText(text, textWidth - indent, (value) => measure(value, size, font))) {
      await drawLine(line, left + indent, y, size, font, color);
      y -= size + 4;
    }
  }

  pdf.setTitle("Abschlussnachweis · Prompt Engineering");
  page.drawRectangle({ x: 0, y: page.getHeight() - 9, width: paperWidth, height: 9, color: teal });
  await paragraph("Prompt Engineering", { size: 28, font: bold });
  await paragraph("Abschlussnachweis", { size: 14, color: teal, font: bold });
  y -= 15;
  await paragraph(`Name: ${name}`);
  await paragraph(`Klasse: ${className}`);
  await paragraph(`Datum: ${date}`);
  y -= 14;
  await paragraph(`Basic · ${stationTitles.length} von ${stationTitles.length} Stationen abgeschlossen`, { size: 13, font: bold, color: teal });
  for (const title of stationTitles) await paragraph(`•  ${title}`, { indent: 5 });

  if (practice) {
    y -= 14;
    await paragraph("Erweitert · Praxisauftrag", { size: 13, font: bold, color: teal });
    await paragraph(practice.title, { font: bold });
    for (const [label, value] of [
      ["Mein Prompt", practice.prompt],
      ["Ausschnitt oder Bildbeschreibung", practice.result],
      ["Das habe ich verbessert", practice.change]
    ]) {
      y -= 6;
      await paragraph(label, { size: 10, font: bold });
      await paragraph(value, { size: 10 });
    }
  }

  const bytes = await pdf.save();
  const file = new Blob([bytes], { type: "application/pdf" });
  const objectUrl = URL.createObjectURL(file);
  const link = document.createElement("a");
  const fileName = name.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
  link.href = objectUrl;
  link.download = fileName ? `Prompt-Engineering-${fileName}.pdf` : "Prompt-Engineering-Abschluss.pdf";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(objectUrl), 30_000);
}
