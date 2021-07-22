import React from "react";
import Faq from "react-faq-component";
function FrequentlyAskedQuestions() {
  const data = {
    title: "Frequently Asked Questions",
    rows: [
      {
        title: "My vaccine information is missing. What should I do?",
        content:"random data"
      },
      {
        title: "What if you receive my claim or official record after I self reported my vaccine",
        content:
          "random data",
      },
      {
        title: "What should I do if my vaccine information is incorrect",
        content: "random data",
      },
      {
        title: "From where is UnitedHealthCare getting my Vaccine information",
        content: "random data"
      },
    ],
  };

  const styles = {
  
    titleTextColor: "blue",
    rowTitleColor: "blue",

  };
  return (
    <React.Fragment>
      <Faq data={data} styles={styles} />
    </React.Fragment>
  );
}

export default FrequentlyAskedQuestions;
