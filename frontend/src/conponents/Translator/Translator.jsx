import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import List from "./List";

const Translator = () => {
  const [sentence, setSentence] = useState("");
  const [source, setSource] = useState("ja");
  const [target, setTarget] = useState("ja");
  const [translatedSentence, setTranslatedSentence] = useState("");
  const END_POINT_URL =
    "https://script.google.com/macros/s/AKfycbwu4Yog6q3_hzV_ppOkHaRGPhLhqSBglJoXSIa5tEPe_FH-b4oNumf9/exec?";

  const createURL = () => {
    let url = END_POINT_URL;

    url += "text=";
    url += sentence;
    url += "&source=";
    url += source;
    url += "&target=";
    url += target;

    return url;
  };

  const doGet = () => {
    const a = createURL();
    axios
      .get(a)
      .then((results) => {
        console.log(results);
        setTranslatedSentence(results.data.text);
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  };

  return (
    <div>
      <Form
        setSentence={setSentence}
        setSource={setSource}
        setTarget={setTarget}
        doGet={doGet}
      />
      <List translatedSentence={translatedSentence} />
    </div>
  );
};

export default Translator;
