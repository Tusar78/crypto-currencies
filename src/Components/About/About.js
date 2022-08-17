import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Question from "./Question";

const About = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("question.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="section">
          <div className="about">
            <div className="about__header">
              <h2 className="about__title">
                General knowledge about Cryptocurrency.
              </h2>
              <p className="about__subtitle">
                If you do a lot of reading in the financial arena, you probably
                have questions about cryptocurrency. We have chosen 10 of the
                questions we hear most often and provided answers for you below.
              </p>
            </div>

            <div className="about__question">
              {questions.map((question) => (
                <Question key={question.id} questionAnswer={question} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
