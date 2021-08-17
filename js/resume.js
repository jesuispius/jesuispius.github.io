$(document).ready(function () {

    // Render the skills items //
    const skill_items = [
        "C++", "Python", "Java", "JavaScript", 
        "TypeScript", "HTML", "CSS", "Flask", 
        "SQL", "Node.js", "React", "Bootstrap", "Materialize"
    ];

    let render_item = $("<div></div>").addClass("resume-content-skills-items");
    skill_items.map(item => {
        let item_badge = $("<div></div>")
                            .addClass("badge text-dark mt-3")
                            .css("background-color", "#FFD54F")
                            .text(item);
        render_item.append(item_badge);
    });
    $(".resume-content-skills").append(render_item);


    
    // Render the languages items //
    const languages_items = [
        {lang: "Vietnamese", level_text: "Native or bilingual proficiency", level_percent: "100"},
        {lang: "English", level_text: "Full professional proficiency", level_percent: "70"},
        {lang: "French", level_text: "Elementary proficiency", level_percent: "50"}
    ]

    let render_lang_item = $("<div></div>");
    languages_items.map(item => {
        let lang_text = $("<div></div>").text(item.lang).addClass("lang-text");
        let lang_progress = $("<div></div>")
                            .addClass("progress progress-bar-striped bg-warning mt-2 mb-2")
                            .css("width", item.level_percent.concat("%"))
                            .attr("aria-valuenow", item.level_percent)
                            .attr("aria-valuemin", "0")
                            .attr("aria-valuemax", "100")
                            .attr("role", "progressbar");
        render_lang_item.append(lang_text, lang_progress);
    });
    $(".resume-content-languages").append(render_lang_item);
});