import { useState } from "react";

function Task() {
  let question = [
    {
      ques: "what is your name?",
      ans: "My name is aniket",
      isShow: false,
    },
    {
      ques: "what is your city?",
      ans: "My city is rampur",
      isShow: false,
    },
    {
      ques: "what is your age?",
      ans: "My age is 20",
      isShow: false,
    },
  ];
  const [list, setList] = useState(question);
  function Show(q) {
    let update = list.map((lis) => {
      if (lis.ques === q) {
        lis.isShow = !lis.isShow;
      }
      return lis;
    });
    setList(update);
  }
  return (
    <div>
      <h1>Task</h1>
      {list.map((lis) => {
        return (
          <div key={lis.ques} className="Questiondiv">
            <div className="Question">
              <p>{lis.ques}</p>
              <button onClick={() => Show(lis.ques)}>
                {lis.isShow ? "-" : "+"}
              </button>
            </div>
            {lis.isShow && <p>{lis.ans}</p>}
          </div>
        );
      })}
    </div>
  );
}
export default Task;
