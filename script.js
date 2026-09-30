// ================= Question types =================
var GEN = ["MCQs", "Short Questions", "Long Questions", "Fill in the blanks", "True/False"];

var SUBJECTS = {
  urdu: { en: "Urdu", ur: "اردو",
    types: GEN.concat(["Word Meanings", "Make Sentences", "Explanation", "Translation", "Prose/Poetry Questions"]) },
  english: { en: "English", ur: "انگریزی",
    types: GEN.concat(["Grammar", "Translation", "Comprehension", "Paragraph", "Letter/Application" , "Letters" , "Letters", "story" , "Application" , "Coperhansive Paragraph"    ]) },
  math: { en: "Mathematics", ur: "ریاضی",
    types: GEN.concat(["Numerical Questions", "Formula-based Questions"]) },
  physics: { en: "Physics", ur: "طبیعیات",
    types: GEN.concat(["Numerical Questions", "Diagram Questions", "Definitions"]) },
  chemistry: { en: "Chemistry", ur: "کیمیا",
    types: GEN.concat(["Numerical Questions", "Diagram Questions", "Definitions"]) },
  biology: { en: "Biology", ur: "حیاتیات",
    types: GEN.concat(["Diagram Questions", "Definitions"]) },
  computer: { en: "Computer Science", ur: "کمپیوٹر سائنس",
    types: GEN.concat(["Programming Questions", "Definitions", "Short Question"]) },
  islamiyat: { en: "Islamiyat", ur: "اسلامیات",
    types: GEN.concat(["Translation", "Explanation" , "Definitions"]) },
  pakstudies: { en: "Pakistan Studies", ur: "مطالعہ پاکستان",
    types: GEN.concat(["Explanation", "Map Questions"]) },
  gscience: { en: "General Science", ur: "جنرل سائنس",
    types: GEN.concat(["Diagram Questions", "Definitions"]) },
  gmath: { en: "General Mathematics", ur: "جنرل ریاضی",
    types: GEN.concat(["Numerical Questions", "Formula-based Questions"]) },
  economics: { en: "Economics", ur: "معاشیات",
    types: GEN.concat(["Definitions", "Explanation"]) },
  statistics: { en: "Statistics", ur: "شماریات",
    types: GEN.concat(["Numerical Questions", "Formula-based Questions"]) },
  accounting: { en: "Principles of Accounting", ur: "اصولِ حسابداری",
    types: GEN.concat(["Numerical Questions", "Definitions"]) },
  commerce: { en: "Commerce", ur: "تجارت",
    types: GEN.concat(["Definitions", "Explanation"]) },
  civics: { en: "Civics", ur: "شہریت",
    types: GEN.concat(["Definitions", "Explanation"]) },
  geography: { en: "Geography", ur: "جغرافیہ",
    types: GEN.concat(["Map Questions", "Diagram Questions", "Definitions"]) },
  history: { en: "History", ur: "تاریخ",
    types: GEN.concat(["Explanation", "Definitions"]) },
  custom: { en: "Other (apna subject)", ur: "دیگر (اپنا مضمون)",
    types: GEN.concat(["Numerical Questions", "Diagram Questions", "Definitions", "Explanation", "Translation"]) }
};

// Urdu paper mein question types ke naam
var TYPE_UR = {
  "MCQs": "کثیر الانتخابی سوالات",
  "Short Questions": "مختصر سوالات",
  "Long Questions": "تفصیلی سوالات",
  "Fill in the blanks": "خالی جگہ پر کریں",
  "True/False": "درست/غلط",
  "Word Meanings": "الفاظ کے معنی",
  "Make Sentences": "جملے بنائیں",
  "Explanation": "تشریح",
  "Translation": "ترجمہ",
  "Prose/Poetry Questions": "نثر/نظم کے سوالات",
  "Grammar": "قواعد",
  "Comprehension": "عبارت فہمی",
  "Paragraph": "پیراگراف",
  "Letter/Application": "خط/درخواست",
  "Numerical Questions": "عددی سوالات",
  "Formula-based Questions": "فارمولے پر مبنی سوالات",
  "Diagram Questions": "شکل/خاکہ",
  "Definitions": "تعریفات",
  "Programming Questions": "پروگرامنگ کے سوالات",
  "Map Questions": "نقشے کے سوالات"
};

// Header ke labels
var LABELS = {
  urdu: { subject: "مضمون", cls: "جماعت", teacher: "استاد",
          student: "طالب علم", father: "والد کا نام", roll: "رول نمبر",
          date: "تاریخ", time: "وقت", total: "کل نمبر", obtained: "حاصل کردہ نمبر" },
  other: { subject: "Subject", cls: "Class", teacher: "Teacher",
           student: "Student Name", father: "Father Name", roll: "Roll No.",
           date: "Date", time: "Time", total: "Total Marks", obtained: "Obtained Marks" }
};

// Objective tab mein yeh types, baqi sab Subjective tab mein
var OBJECTIVE = ["MCQs", "Fill in the blanks", "True/False"];

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ================= Left panel ka HTML ({p} = prefix) =================
function panelTemplate(title) {
  return '' +
  '<div class="panel">' +
    '<h2>' + title + '</h2>' +

    '<h3>1. Paper Header</h3>' +
    '<div class="grid">' +
      '<input id="{p}academy" placeholder="Academy Name">' +
      '<input id="{p}address" placeholder="School/Academy Address">' +
      '<input id="{p}exam" placeholder="Test / Examination Name">' +
      '<input id="{p}cls" placeholder="Class">' +
      '<input id="{p}section" placeholder="Section">' +
      '<input id="{p}teacher" placeholder="Teacher Name">' +
      '<input id="{p}student" placeholder="Student Name">' +
      '<input id="{p}father" placeholder="Father Name">' +
      '<input id="{p}roll" placeholder="Roll No.">' +
      '<input id="{p}date" type="date">' +
      '<input id="{p}time" placeholder="Time (e.g. 1 Hour)">' +
      '<input id="{p}total" placeholder="Total Marks">' +
    '</div>' +
    '<label>Academy Logo: <input type="file" id="{p}logo" accept="image/*"></label>' +
    '<label>Aap ki Picture: <input type="file" id="{p}photo" accept="image/*"></label>' +

    '<h3>Watermark</h3>' +
    '<select id="{p}wmType">' +
      '<option value="none">❌ Koi Watermark Nahi</option>' +
      '<option value="text">🔤 Text Watermark</option>' +
      '<option value="logo">🖼️ Logo Watermark</option>' +
    '</select>' +
    '<input id="{p}wmText" placeholder="Watermark text (jaise Academy ka naam)">' +

    '<h3>2. Subject</h3>' +
    '<select id="{p}subject"></select>' +
    '<input id="{p}customSubject" placeholder="Apne subject ka naam likhein" style="display:none">' +
    '<label>Paper ki Zaban:</label>' +
    '<select id="{p}lang">' +
      '<option value="english">English (Left to Right)</option>' +
      '<option value="urdu">اردو (Right to Left)</option>' +
    '</select>' +

    '<h3>3. Question Add Karein</h3>' +
    '<select id="{p}qtype"></select>' +
    '<textarea id="{p}qtext" rows="3" placeholder="Question likhein"></textarea>' +
    '<div id="{p}mcqBox" style="display:none">' +
      '<input id="{p}optA" placeholder="Option A">' +
      '<input id="{p}optB" placeholder="Option B">' +
      '<input id="{p}optC" placeholder="Option C">' +
      '<input id="{p}optD" placeholder="Option D">' +
    '</div>' +
    '<textarea id="{p}qparts" rows="4" placeholder="Sub-parts (a),(b),(c) - har line mein ek (zaroori nahi)"></textarea>' +
    '<input id="{p}qmarks" type="number" placeholder="Marks">' +
    '<button id="{p}add">➕ Question Add Karein</button>' +

    '<h3>Questions List</h3>' +
    '<div id="{p}qlist"></div>' +

    '<button class="print" id="{p}print">🖨️ Print / Save as PDF</button>' +
    '<button class="clear" id="{p}clear">🗑️ Sab Clear Karein</button>' +
  '</div>' +
  '<div class="preview"><div id="{p}paper"></div></div>';
}

// ================= Ek poora paper maker (mode = "obj" ya "sub") =================
function createApp(mode, containerId, title) {
  var isObj = (mode === "obj");
  var P = mode + "_";
  var questions = [];
  var logoData = "";
  var photoData = "";

  var container = document.getElementById(containerId);
  container.innerHTML = panelTemplate(title).split("{p}").join(P);

  function g(id) { return document.getElementById(P + id); }

  function isUrduLang() { return g("lang").value === "urdu"; }

  function typeLabel(t) {
    return (isUrduLang() && TYPE_UR[t]) ? TYPE_UR[t] : t;
  }

  function subjectName() {
    var key = g("subject").value;
    if (key === "custom") return esc(g("customSubject").value);
    return isUrduLang() ? SUBJECTS[key].ur : SUBJECTS[key].en;
  }

  function fillSubjects() {
    var html = "";
    for (var key in SUBJECTS) {
      html += '<option value="' + key + '">' + SUBJECTS[key].en + ' (' + SUBJECTS[key].ur + ')</option>';
    }
    g("subject").innerHTML = html;
  }

  function toggleMCQ() {
    var isMCQ = (g("qtype").value === "MCQs");
    g("mcqBox").style.display = isMCQ ? "block" : "none";
    g("qparts").style.display = isMCQ ? "none" : "block";
  }

  function fillTypes() {
    var key = g("subject").value;
    var old = g("qtype").value;
    var list = SUBJECTS[key].types.filter(function (t) {
      return (OBJECTIVE.indexOf(t) !== -1) === isObj;
    });
    var html = "";
    list.forEach(function (t) {
      html += '<option value="' + t + '">' + typeLabel(t) + '</option>';
    });
    g("qtype").innerHTML = html;
    if (old && list.indexOf(old) !== -1) g("qtype").value = old;
    g("customSubject").style.display = (key === "custom") ? "block" : "none";
    toggleMCQ();
  }

  function readImage(id, setter) {
    g(id).addEventListener("change", function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () { setter(reader.result); render(); };
      reader.readAsDataURL(file);
    });
  }
  readImage("logo", function (d) { logoData = d; });
  readImage("photo", function (d) { photoData = d; });

  function addQuestion() {
    var text = g("qtext").value.trim();
    if (!text) { alert("Pehle question likhein"); return; }

    var parts;
    if (g("qtype").value === "MCQs") {
      parts = [g("optA").value.trim(), g("optB").value.trim(),
               g("optC").value.trim(), g("optD").value.trim()];
    } else {
      parts = g("qparts").value.split("\n")
        .map(function (x) { return x.trim(); })
        .filter(function (x) { return x; });
    }

    questions.push({
      type: g("qtype").value,
      text: text,
      parts: parts,
      marks: g("qmarks").value
    });

    ["qtext", "qparts", "optA", "optB", "optC", "optD", "qmarks"].forEach(function (id) {
      g(id).value = "";
    });
    render();
  }

  function headerHTML(L, pageTitle) {
    var logo = logoData ? '<img src="' + logoData + '">' : '<div style="width:80px"></div>';
    var photo = photoData ? '<img src="' + photoData + '">' : '<div style="width:80px"></div>';
    return '' +
      '<div class="head">' + logo +
        '<div class="center">' +
          '<h1>' + esc(g("academy").value) + '</h1>' +
          '<p>' + esc(g("address").value) + '</p>' +
          '<h3>' + esc(g("exam").value) + '</h3>' +
        '</div>' + photo +
      '</div>' +
      '<div class="info">' +
        '<div><b>' + L.subject + ':</b> ' + subjectName() + '</div>' +
        '<div><b>' + L.cls + ':</b> ' + esc(g("cls").value) + '</div>' +
        '<div><b>' + L.section + ':</b> ' + esc(g("section").value) + '</div>' +
        '<div><b>' + L.teacher + ':</b> ' + esc(g("teacher").value) + '</div>' +
        '<div><b>' + L.student + ':</b> ' + (esc(g("student").value) || "__________") + '</div>' +
        '<div><b>' + L.father + ':</b> ' + (esc(g("father").value) || "__________") + '</div>' +
        '<div><b>' + L.roll + ':</b> ' + (esc(g("roll").value) || "______") + '</div>' +
        '<div><b>' + L.date + ':</b> ' + esc(g("date").value) + '</div>' +
        '<div><b>' + L.time + ':</b> ' + esc(g("time").value) + '</div>' +
        '<div><b>' + L.total + ':</b> ' + esc(g("total").value) + '</div>' +
        '<div><b>' + L.obtained + ':</b> ________</div>' +
      '</div>' +
      '<div class="page-title">' + pageTitle + '</div>';
  }

  function questionsHTML() {
    var html = "";
    var lastType = "";
    questions.forEach(function (q, n) {
      if (q.type !== lastType) {
        html += '<div class="sec-title">' + esc(typeLabel(q.type)) + '</div>';
        lastType = q.type;
      }
      var partsHtml = "";
      if (q.parts.length) {
        if (q.type === "MCQs") {
          var letters = ["A", "B", "C", "D", "E", "F"];
          partsHtml = '<div class="opts">';
          q.parts.forEach(function (p, k) {
            partsHtml += '<div>(' + letters[k] + ') ' + esc(p) + '</div>';
          });
          partsHtml += '</div>';
        } else {
          var small = "abcdefghij";
          partsHtml = '<div class="parts">';
          q.parts.forEach(function (p, k) {
            partsHtml += '<div>(' + small[k] + ') ' + esc(p) + '</div>';
          });
          partsHtml += '</div>';
        }
      }
      html += '<div class="q"><div class="row">' +
        '<div class="text">Q' + (n + 1) + '. ' + esc(q.text) + '</div>' +
        '<div>' + (q.marks ? '[' + esc(q.marks) + ']' : '') + '</div>' +
        '</div>' + partsHtml + '</div>';
    });
    return html;
  }

  function watermarkHTML() {
    var type = g("wmType").value;
    if (type === "text" && g("wmText").value.trim()) {
      return '<div class="watermark"><span>' + esc(g("wmText").value) + '</span></div>';
    }
    if (type === "logo" && logoData) {
      return '<div class="watermark"><img src="' + logoData + '"></div>';
    }
    return "";
  }

  function render() {
    var isUrdu = isUrduLang();
    var L = isUrdu ? LABELS.urdu : LABELS.other;
    var cls = "page" + (isUrdu ? " rtl" : "");
    var pageTitle = isObj
      ? (isUrdu ? "حصہ معروضی" : "OBJECTIVE")
      : (isUrdu ? "حصہ انشائیہ" : "SUBJECTIVE");

    g("paper").innerHTML = '<div class="' + cls + '">' + watermarkHTML() +
      headerHTML(L, pageTitle) + questionsHTML() + '</div>';

    var list = "";
    questions.forEach(function (q, i) {
      list += '<div class="qitem"><span>' + (i + 1) + '. [' + esc(q.type) + '] ' +
        esc(q.text.slice(0, 40)) + '</span>' +
        '<button data-i="' + i + '">X</button></div>';
    });
    g("qlist").innerHTML = list;
  }

  // ----- Events -----
  g("qlist").addEventListener("click", function (e) {
    var i = e.target.getAttribute("data-i");
    if (i !== null) { questions.splice(Number(i), 1); render(); }
  });
  g("add").addEventListener("click", addQuestion);
  g("print").addEventListener("click", function () { window.print(); });
  g("clear").addEventListener("click", function () {
    if (confirm("Sab questions delete kar dun?")) { questions = []; render(); }
  });

  container.querySelectorAll(".panel input, .panel select, .panel textarea").forEach(function (el) {
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });

  g("subject").addEventListener("change", function () {
    if (g("subject").value === "urdu") g("lang").value = "urdu";
    if (g("subject").value === "english") g("lang").value = "english";
    fillTypes();
    render();
  });
  g("lang").addEventListener("change", function () { fillTypes(); render(); });
  g("qtype").addEventListener("change", toggleMCQ);

  // ----- Start -----
  fillSubjects();
  g("subject").value = "urdu";
  g("lang").value = "urdu";
  fillTypes();
  render();
}

createApp("obj", "app_obj", "📝 Objective Paper");
createApp("sub", "app_sub", "✍️ Subjective Paper");

// ================= Tabs =================
function showTab(which) {
  document.getElementById("app_obj").classList.toggle("hidden", which !== "obj");
  document.getElementById("app_sub").classList.toggle("hidden", which !== "sub");
  document.getElementById("tabObj").classList.toggle("active", which === "obj");
  document.getElementById("tabSub").classList.toggle("active", which === "sub");
}
document.getElementById("tabObj").addEventListener("click", function () { showTab("obj"); });
document.getElementById("tabSub").addEventListener("click", function () { showTab("sub"); });