import React, { useState } from "react";

function English() {
  const [worksInEnglish, setWorksInEnglish] = useState({
    PersonalPronouns: ["I", "You", "He", "She", "It", "We", "You", "They"],
    DefiniteArticle: ["The: o, a, os, as"],
    IndefiniteArticle: ["A/An = Um, Uma"],
    DemonstrativePronouns: [
      [
        " - Singular - ",
        "This: (Este, Esta, Isto)",
        "That: (Esse, Essa, Isso, Aquele, Aquela, Aquilo",
      ],
      [
        " - Plural - ",
        "These: (Estes, Estas)",
        "Those: (Esses, Essas, Aqueles, Aquelas",
      ],
    ],
  });

  return (
    <div>
      <h1>English studies</h1>

      <h2>Personal Pronouns</h2>
      <ul>
        {worksInEnglish.PersonalPronouns.map((pronoun, index) => (
          <li key={index} style={{ color: "black" }}>
            {pronoun}
          </li>
        ))}
      </ul>

      <h2>Definite Article</h2>
      <ul>
        {worksInEnglish.DefiniteArticle.map((article, index) => (
          <li key={index} style={{ color: "black" }}>
            {article}
          </li>
        ))}
      </ul>

      <h2>Indefinite Article</h2>
      <ul>
        {worksInEnglish.IndefiniteArticle.map((article, index) => (
          <li key={index} style={{ color: "black" }}>
            {article}
          </li>
        ))}
      </ul>

      <h2>Demonstrative Pronouns</h2>
      <ul>
        {worksInEnglish.DemonstrativePronouns.map((v, i) => (
          <li key={i} style={{ color: "black" }}>
            {v.map((v_i, i_i) => (
              <p key={i_i} style={{ color: "black" }}>
                {v_i}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default English;
