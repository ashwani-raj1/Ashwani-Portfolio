import "./Dsa.css";

const Dsa = () => {
  const list = [
    {
      Topics: [
        "Arrays",
        "Strings",
        "Recursion",
        "Stack",
        "Queue",
        "Linked List",
        "Maths",
      ],
    },
  ];

  return (
    <section id="dsa" className="dsa">
      <h5 className="first">
        Solved over 200+ Questions on Geeks for Geeks{" "}
        <a
          href="https://www.geeksforgeeks.org/profile/ashwanidhry?tab=activity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </h5>

      <div className="topicList">
        {list.map((dsa, index) => (
          <div className="topicList-item" key={index}>
            {dsa.Topics.map((topic, i) => (
              <span key={i}>{topic}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dsa;
