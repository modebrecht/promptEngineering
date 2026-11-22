"use strict";

const stations = [
  {
    title: "Auftrag klar machen",
    award: { id: "auftrag", name: "Klarer Auftrag" },
    intro: "Sag der KI, was du brauchst und für wen die Antwort gedacht ist.",
    questions: [
      {
        prompt: "Welcher Auftrag passt am besten für eine 7. Klasse?",
        context: "Thema ist der einfache Stromkreis.",
        answers: [
          ["Erkläre ausführlich, wie Strom funktioniert.", "Der Auftrag lässt offen, welches Vorwissen die Klasse hat."],
          ["Erkläre einen einfachen Stromkreis für die 7. Klasse. Nenne Batterie, Kabel und Lampe.", "Der Auftrag nennt das Thema, die Zielgruppe und drei wichtige Begriffe."],
          ["Beschreibe einen Stromkreis mit allen wichtigen Fachbegriffen.", "Hier fehlt eine Eingrenzung für die 7. Klasse."]
        ],
        correct: 1
      },
      {
        prompt: "Welche Ergänzung hilft, wenn die Antwort auf eine kleine Lernkarte passen soll?",
        context: "Erkläre einen einfachen Stromkreis für die 7. Klasse.",
        answers: [
          ["Schreibe höchstens drei kurze Stichpunkte.", "Die Form und Länge passen zu einer kleinen Lernkarte."],
          ["Erkläre es möglichst gut.", "«Möglichst gut» sagt nichts darüber, wie viel Platz auf der Lernkarte ist."],
          ["Zeige mir viele Beispiele.", "Viele Beispiele können mehr Platz benötigen, als auf der Lernkarte vorhanden ist."]
        ],
        correct: 0
      }
    ]
  },
  {
    title: "Ein Beispiel geben",
    award: { id: "beispiel", name: "Gutes Beispiel" },
    intro: "Ein Beispiel hilft, wenn die Antwort ein bestimmtes Format haben soll.",
    questions: [
      {
        prompt: "Welche Musterzeile zeigt das gewünschte Format?",
        context: "Gewünscht ist: ein Begriff, ein Gleichheitszeichen, ein kurzer Satz.",
        answers: [
          ["Tastatur und Bildschirm sind Teile eines Computers.", "Hier fehlt die Einteilung in Begriff und Erklärung."],
          ["Tastatur, Bildschirm, Maus", "Die Liste nennt Begriffe, zeigt aber keine Erklärungen im geforderten Format."],
          ["Tastatur = Mit ihr gibst du Buchstaben und Zahlen ein.", "Die Zeile zeigt genau, wie Begriff und Erklärung verbunden werden."]
        ],
        correct: 2
      },
      {
        prompt: "Welches Beispiel passt nicht zu den anderen?",
        context: "Gewünscht ist das Format Tiername = ein Emoji.",
        answers: [
          ["Hund = 🐶", "Diese Zeile hat einen Tiernamen, ein Gleichheitszeichen und ein Emoji."],
          ["Katze: 🐱 – ein Haustier", "Hier gibt es einen Doppelpunkt und einen Zusatz. Passend wäre «Katze = 🐱»."],
          ["Giraffe = 🦒", "Diese Zeile folgt dem gleichen Muster wie «Hund = 🐶»."]
        ],
        correct: 1
      }
    ]
  },
  {
    title: "Einen Beleg finden",
    award: { id: "beleg", name: "Beleg gefunden" },
    intro: "Eine Antwort kann überzeugend klingen. Vergleiche ihre Aussage mit der Originalquelle.",
    questions: [
      {
        prompt: "Welche Aussage lässt sich mit der Mitteilung belegen?",
        context: "Mitteilung der Schule: Die Werkstatt ist am Mittwoch von 13.30 bis 15.00 Uhr geöffnet. Bring dein eigenes Heft mit.",
        answers: [
          ["Die Werkstatt ist jeden Mittwoch geöffnet.", "Die Mitteilung nennt einen Mittwoch. Eine wöchentliche Öffnung steht dort nicht."],
          ["Die Schule stellt ein Heft bereit.", "Lies den letzten Satz. Dort steht, wer das Heft mitbringen soll."],
          ["Die Werkstatt schliesst am Mittwoch um 15.00 Uhr.", "Die Uhrzeit 15.00 Uhr steht ausdrücklich in der Mitteilung."]
        ],
        correct: 2
      },
      {
        prompt: "Kann man in der Werkstatt auch einen Laptop ausleihen?",
        context: "Mitteilung der Schule: Die Werkstatt ist am Mittwoch von 13.30 bis 15.00 Uhr geöffnet. Bring dein eigenes Heft mit.",
        answers: [
          ["Die Mitteilung beantwortet diese Frage nicht.", "Das stimmt. Über Laptops steht nichts in der Mitteilung."],
          ["Ja, dort kann man einen Laptop ausleihen.", "Die Mitteilung nennt keine Ausleihe."],
          ["Nein, dort werden keine Laptops ausgeliehen.", "Auch ein Verbot der Ausleihe steht nicht in der Mitteilung."]
        ],
        correct: 0
      }
    ]
  },
  {
    title: "Eine Antwort verbessern",
    award: { id: "antwort", name: "Bessere Antwort" },
    intro: "Sag konkret, was an der Antwort besser werden soll. Prüfe danach, ob die Änderung sichtbar ist.",
    questions: [
      {
        prompt: "Welcher Folgeauftrag hilft bei dieser Antwort?",
        context: "Die Erklärung zum Stromkreis ist für die 7. Klasse zu schwierig.",
        answers: [
          ["Schreib es besser.", "Hier bleibt offen, was besser werden soll."],
          ["Schreibe dieselbe Erklärung für eine 7. Klasse. Erkläre «Spannung» mit einem einfachen Beispiel.", "Die Zielgruppe und die gewünschte Änderung sind klar."],
          ["Schreib mehr über Strom.", "Mehr Text kann die Erklärung für diese Klasse noch schwieriger machen."]
        ],
        correct: 1
      },
      {
        prompt: "Woran erkennst du, dass die Überarbeitung gelungen ist?",
        context: "Du hast eine verständliche Erklärung mit einem Beispiel für Spannung verlangt.",
        answers: [
          ["Der neue Text hat mehr Wörter als der alte.", "Die Länge allein zeigt nicht, ob der Text verständlicher ist."],
          ["Die KI sagt, sie habe alles verbessert.", "Prüfe die neue Erklärung anhand deines Auftrags."],
          ["Das Beispiel ist vorhanden und ich kann die Erklärung in eigenen Worten wiedergeben.", "Du prüfst das gewünschte Beispiel und ob du die Erklärung wirklich verstanden hast."]
        ],
        correct: 2
      }
    ]
  }
];

const tasks = {
  feedback: {
    title: "Eine Antwort gezielt verbessern",
    steps: [
      "Lass dir erklären, was ein Betriebssystem macht. Nenne die Zielgruppe und ein Kriterium, etwa dass ein Alltagsbeispiel vorkommen soll.",
      "Entscheide, was für eine 7. Klasse noch zu schwierig ist. Fordere genau dazu eine Änderung an.",
      "Vergleiche die beiden Antworten. Wähle einen kurzen Ausschnitt, an dem man die Änderung sieht."
    ],
    criteria: "Lies beide Antworten und prüfe dein Kriterium selbst. Zeige die Stelle, an der die Verbesserung sichtbar wird."
  },
  stil: {
    title: "Einen Stil konkret vorgeben",
    steps: [
      "Verfasse einen Prompt für einen kurzen Hinweis auf den Sporttag mit diesen Angaben: Dienstag, Start 8.15 Uhr, Turnschuhe mitbringen.",
      "Überarbeite den Auftrag so, dass daraus eine ruhige, sachliche Nachricht für die Klasse entsteht.",
      "Prüfe die fertige Nachricht auf die drei Angaben und den gewünschten Ton."
    ],
    criteria: "Tag, Uhrzeit und Turnschuhe stehen in der Nachricht. Der Text ist kurz und sachlich."
  },
  loesung: {
    title: "Einen Lösungsweg überprüfen",
    steps: [
      "Eine Schnecke klettert in einem 10-Meter-Brunnen tagsüber 3 Meter hoch und rutscht nachts 2 Meter ab. Sobald sie den Rand erreicht, ist sie draussen.",
      "Frage nach der Anzahl Tage und einem kurzen Rechencheck für den letzten Tag.",
      "Prüfe selbst, auf welcher Höhe die Schnecke am Morgen des letzten Tages steht."
    ],
    criteria: "Die Lösung lautet 8 Tage. Am Morgen von Tag 8 steht sie auf 7 Metern und erreicht tagsüber den Rand."
  },
  sichtweisen: {
    title: "Eine Frage aus mehreren Sichtweisen prüfen",
    steps: [
      "Frage nach je einem Argument zur Frage «Soll es an der Schule eine handyfreie Pause geben?» aus Sicht eines Schülers und einer Lehrperson.",
      "Ergänze eine dritte Perspektive und lass ein weiteres Argument formulieren.",
      "Wähle das Argument, das eine neue Sicht eröffnet, und begründe deine Wahl."
    ],
    criteria: "Die dritte Sicht bringt einen neuen Grund. Du kannst erklären, weshalb er für die Frage wichtig ist."
  },
  promptentwurf: {
    title: "Einen Prompt mit KI entwerfen",
    steps: [
      "Dein Ziel ist ein Entwurf für ein Aushangbild: Eine gelbe Ente im Regen, mit Platz oben für eine Überschrift.",
      "Lass dir einen Prompt für ein Bildtool vorschlagen. Überarbeite ihn so, dass Motiv, Bildausschnitt und Platz für den Titel klar sind.",
      "Teste den Prompt im Bildtool, falls eines verfügbar ist. Beschreibe kurz, was im Bild zu sehen ist. Ohne Bildtool kann dir ein Chat Rückmeldung zu den drei Vorgaben geben."
    ],
    criteria: "Man erkennt Motiv und Bildausschnitt. Der obere Bereich ist für die Überschrift vorgesehen. Ohne Bildtool kannst du als Ergebnis eine kurze KI-Rückmeldung zum Prompt verwenden."
  },
  quelle: {
    title: "Mit einem Quelltext arbeiten",
    steps: [
      "Nutze nur diese Mitteilung: «Am Mittwoch ist der Informatikraum von 13.30 bis 15 Uhr offen. Bring deine Kopfhörer mit.»",
      "Frage, wann der Raum geöffnet ist und ob dort ein Drucker verfügbar ist. Verlange für belegte Aussagen ein kurzes Zitat aus der Mitteilung.",
      "Prüfe, ob die Antwort die Öffnungszeit belegt und die Frage zum Drucker offenlässt."
    ],
    criteria: "Die Zeit stimmt mit der Mitteilung überein. Die Antwort weist darauf hin, dass die Mitteilung nichts über einen Drucker sagt. Bei einer Websuche öffnest du den angegebenen Link und suchst dort die Stelle, die die Aussage belegt."
  },
  vorlage: {
    title: "Eine Prompt-Schablone wiederverwenden",
    steps: [
      "Schreibe eine Vorlage mit Platzhaltern für ein Schulthema und eine Klassenstufe.",
      "Fülle dieselbe Vorlage einmal für Fotosynthese und einmal für Stromkreise aus.",
      "Prüfe, ob beide Aufträge dieselbe Ausgabeform verlangen und zum jeweiligen Thema passen."
    ],
    criteria: "Die zwei Versionen sind eigenständig verständlich. Die Platzhalter sind ausgefüllt und die vorgegebene Ausgabeform bleibt sichtbar."
  }
};

const storageKey = "prompt-engineering-kurs-v1";
const fields = { prompt: 340, result: 340, change: 180 };
const storageNotice = document.querySelector("#storage-notice");
const get = (id) => document.getElementById(id);

function hasTask(task) {
  return Object.hasOwn(tasks, task);
}

function readState(fallback) {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    storageNotice.hidden = false;
    if (fallback) return fallback;
  }
  return {
    answered: stations.map((station, index) =>
      station.questions.map((_, number) => saved?.answered?.[index]?.[number] === true)
    ),
    task: hasTask(saved?.task) ? saved.task : "",
    drafts: Object.fromEntries(Object.keys(tasks).map((key) => [
      key,
      Object.fromEntries(Object.entries(fields).map(([field, max]) => {
        const value = saved?.drafts?.[key]?.[field];
        return [field, typeof value === "string" ? value.slice(0, max) : ""];
      }))
    ]))
  };
}

let state = readState();

function saveState(update) {
  state = readState(state);
  update(state);
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
    storageNotice.hidden = true;
  } catch {
    storageNotice.hidden = false;
  }
}

function stationComplete(index) {
  return state.answered[index].every(Boolean);
}

function completedStations() {
  return state.answered.filter((_, index) => stationComplete(index)).length;
}

function selectedPractice() {
  if (!state.task) return null;
  const draft = state.drafts[state.task];
  if (!Object.keys(fields).every((field) => draft[field].trim())) return null;
  return { title: tasks[state.task].title, ...draft };
}

function appendText(parent, tag, value, className) {
  const element = document.createElement(tag);
  element.textContent = value;
  if (className) element.className = className;
  parent.append(element);
  return element;
}

function renderQuestion(container, station, question, number, onCorrect) {
  const group = document.createElement("fieldset");
  group.className = "question";
  appendText(group, "legend", question.prompt);
  const context = appendText(group, "p", question.context, "question-context");
  context.id = `question-context-${number}`;
  group.setAttribute("aria-describedby", context.id);
  const options = appendText(group, "div", "", "answers");
  const feedback = appendText(group, "p", "", "feedback");
  feedback.setAttribute("role", "status");
  const buttons = question.answers.map(([answer], index) => {
    const button = appendText(options, "button", answer, "option");
    button.type = "button";
    button.addEventListener("click", () => {
      if (state.answered[station][number]) return;
      const correct = index === question.correct;
      buttons.forEach((item) => item.classList.remove("incorrect"));
      if (correct) {
        saveState((saved) => { saved.answered[station][number] = true; });
        markCorrect();
        onCorrect();
      } else {
        button.classList.add("incorrect");
        feedback.className = "feedback try-again";
        feedback.textContent = `Versuch es nochmals. ${question.answers[index][1]}`;
      }
    });
    return button;
  });

  function markCorrect() {
    buttons.forEach((button) => button.setAttribute("aria-disabled", "true"));
    buttons[question.correct].classList.add("correct");
    feedback.className = "feedback success";
    feedback.textContent = `Richtig. ${question.answers[question.correct][1]}`;
  }

  if (state.answered[station][number]) markCorrect();
  container.append(group);
}

function initBasic() {
  const title = get("station-title");
  const stationAward = get("station-award");
  const completionAwards = get("completion-awards");
  const buttonBack = get("station-back");
  const buttonNext = get("station-next");
  const form = get("abschluss-form");
  const downloadStatus = get("download-status");
  const openStation = state.answered.findIndex((_, index) => !stationComplete(index));
  let current = openStation === -1 ? stations.length - 1 : openStation;

  function renderAward(element, award, showCaption = false) {
    const content = get("award-template").content.cloneNode(true);
    content.querySelector("use").setAttribute("href", `#award-${award.id}`);
    content.querySelector(".award-name").textContent = award.name;
    content.querySelector(".award-caption").hidden = !showCaption;
    element.dataset.award = award.id;
    element.replaceChildren(content);
  }

  for (const station of stations) {
    const award = document.createElement("li");
    award.className = "award";
    renderAward(award, station.award);
    completionAwards.append(award);
  }

  function updateProgress(justAnswered = false) {
    const count = completedStations();
    const complete = stationComplete(current);
    get("progress-label").textContent = `${count} von ${stations.length} Stationen abgeschlossen`;
    get("course-progress").value = count;
    stationAward.hidden = !complete;
    stationAward.classList.toggle("award-earned", complete && justAnswered);
    buttonBack.hidden = current === 0;
    buttonNext.disabled = !complete;
    buttonNext.textContent = current === stations.length - 1 ? "Zum Abschluss" : "Nächste Station";
  }

  function renderStation(focusHeading = false) {
    const station = stations[current];
    get("station-position").textContent = `Station ${current + 1} von ${stations.length}`;
    title.textContent = station.title;
    get("station-intro").textContent = station.intro;
    renderAward(stationAward, station.award, true);
    const example = get(`station-example-${current + 1}`);
    get("station-example").replaceChildren(example.content.cloneNode(true));
    const questions = get("questions");
    questions.replaceChildren();
    station.questions.forEach((question, index) =>
      renderQuestion(questions, current, question, index, () => updateProgress(true))
    );
    updateProgress();
    if (focusHeading) title.focus();
  }

  function updateCompletion() {
    const count = completedStations();
    const complete = count === stations.length;
    get("abschluss-title").textContent = complete ? "Basic geschafft!" : "Abschluss";
    get("abschluss-summary").textContent = `${count} von ${stations.length} Basic-Stationen abgeschlossen.`;
    get("completion-heading").classList.toggle("completion-celebration", complete);
    get("completion-trophy").hidden = !complete;
    completionAwards.hidden = !complete;
    get("abschluss-pending").hidden = complete;
    form.hidden = !complete;
    const practice = selectedPractice();
    get("practice-summary").textContent = practice
      ? `Im PDF enthalten: ${practice.title}.`
      : state.task
        ? "Dein freiwilliger Auftrag kommt ins PDF, sobald du alle drei Felder ausgefüllt hast."
        : "Dein PDF enthält den Basic-Abschluss.";
  }

  function showPage(focusHeading = false) {
    const completion = location.hash === "#abschluss";
    get("basic").hidden = completion;
    get("abschluss").hidden = !completion;
    const activePage = completion ? "nav-abschluss" : "nav-basic";
    const inactivePage = completion ? "nav-basic" : "nav-abschluss";
    get(activePage).setAttribute("aria-current", "page");
    get(inactivePage).removeAttribute("aria-current");
    document.title = completion ? "Prompt Engineering · Abschluss" : "Prompt Engineering · Basic";
    if (completion) {
      updateCompletion();
      if (focusHeading) get("abschluss-title").focus();
    }
  }

  buttonBack.addEventListener("click", () => {
    current -= 1;
    renderStation(true);
  });
  buttonNext.addEventListener("click", () => {
    if (!stationComplete(current)) return;
    if (current === stations.length - 1) {
      location.hash = "abschluss";
      return;
    }
    current += 1;
    renderStation(true);
  });
  document.querySelector(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    get("inhalt").focus();
  });
  window.addEventListener("hashchange", () => showPage(true));
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    state = readState();
    renderStation();
    showPage();
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== storageKey) return;
    state = readState();
    renderStation();
    showPage();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (completedStations() !== stations.length) return;
    const studentName = get("student-name");
    const studentClass = get("student-class");
    for (const input of [studentName, studentClass]) {
      if (!input.value.trim()) {
        input.value = "";
        input.reportValidity();
        return;
      }
    }
    const submitButton = form.querySelector("button[type=submit]");
    submitButton.disabled = true;
    downloadStatus.hidden = false;
    downloadStatus.textContent = "Das PDF wird erstellt.";
    try {
      await createCoursePdf({
        name: studentName.value.trim(),
        className: studentClass.value.trim(),
        date: new Intl.DateTimeFormat("de-CH", { dateStyle: "long" }).format(new Date()),
        stationTitles: stations.map((station) => station.title),
        practice: selectedPractice()
      });
      downloadStatus.textContent = "Dein Abschluss-PDF ist bereit.";
    } catch (error) {
      console.error("Abschluss-PDF", error);
      downloadStatus.textContent = "Das PDF konnte nicht erstellt werden. Versuche es nochmals.";
    } finally {
      submitButton.disabled = false;
    }
  });

  renderStation();
  showPage();
}

function initPractice() {
  const choice = get("task-choice");
  const status = get("work-status");
  const inputs = Object.fromEntries(Object.keys(fields).map((field) => [field, get(`work-${field}`)]));

  function updateStatus() {
    const message = selectedPractice()
      ? "Auftrag vollständig. Er wird in dein Abschluss-PDF übernommen."
      : "Fülle alle drei Felder aus, damit der Auftrag ins PDF kommt.";
    if (status.textContent !== message) status.textContent = message;
  }

  function showTask() {
    const task = tasks[state.task];
    get("task-content").hidden = !task;
    choice.value = state.task;
    const example = get("practice-example");
    if (!task) {
      example.replaceChildren();
      return;
    }
    get("task-title").textContent = task.title;
    const template = get(`practice-example-${state.task}`);
    example.replaceChildren(template.content.cloneNode(true));
    const steps = get("task-steps");
    steps.replaceChildren();
    task.steps.forEach((step) => appendText(steps, "li", step));
    get("task-criteria").textContent = task.criteria;
    for (const [field, input] of Object.entries(inputs)) {
      input.value = state.drafts[state.task][field];
    }
    updateStatus();
  }

  for (const [key, task] of Object.entries(tasks)) {
    appendText(choice, "option", task.title).value = key;
  }
  choice.addEventListener("change", () => {
    saveState((saved) => { saved.task = hasTask(choice.value) ? choice.value : ""; });
    showTask();
  });
  for (const [field, input] of Object.entries(inputs)) {
    input.addEventListener("input", () => {
      const key = choice.value;
      if (!hasTask(key)) return;
      saveState((saved) => {
        saved.task = key;
        saved.drafts[key][field] = input.value.slice(0, fields[field]);
      });
      updateStatus();
    });
  }
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    state = readState();
    showTask();
  });
  showTask();
}

if (document.body.dataset.page === "basic") initBasic();
if (document.body.dataset.page === "erweitert") initPractice();
