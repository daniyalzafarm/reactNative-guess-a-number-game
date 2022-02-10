import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

import AppButton from "./components/AppButton";
import AppNumButton from "./components/AppNumButton";
import AppText from "./components/AppText";
import Screen from "./components/Screen";

import colors from "./config/colors";

export default function App() {
  const GAME_START = "Guess Game";
  const RESULTS = "Stats";

  const [inputNum, setinputNum] = useState(GAME_START);
  const [guessNum, setGuessNum] = useState(Math.floor(Math.random() * 10));

  const [status, setStatus] = useState("Enter Number");

  const [userScore, setuserScore] = useState(0);

  const [round, setround] = useState(1);

  const [noHint, setnoHint] = useState(0);
  const [tries, settries] = useState(3);

  //Methods

  //User Interaction
  const numClick = (e) => {
    if (e === 10) setinputNum(0);
    else if (e === 11) setinputNum((inputNum - (inputNum % 10)) / 10);
    else setinputNum(e);
  };

  //Compare User Input and Make Score
  const guessNumber = (e) => {
    if (tries > 0) {
      settries(tries - 1);
      if (Number(inputNum) === Number(guessNum)) {
        setStatus("You Won!");
        setuserScore(userScore + 5);
      } else {
        setStatus("Try Again!");
        setinputNum(0);
      }
    } else {
      setStatus("You Lost");
      setinputNum(0);
    }
  };

  //Using Hint
  const hint = (e) => {
    console.log(guessNum);
    setuserScore(userScore - 2);
    setnoHint(noHint + 1);
    if (Number(inputNum) < Number(guessNum)) {
      setStatus("Try some greater number");
      setinputNum(0);
    } else if (Number(inputNum) === Number(guessNum)) {
      setStatus("You Won!");
      setuserScore(userScore + 5);
    } else if (Number(inputNum) > Number(guessNum)) {
      setStatus("Try some lower number");
      setinputNum(0);
    }
  };

  //Continue
  function continueGame() {
    setround(round + 1);
    let num = Math.floor(Math.random() * 10);
    setGuessNum(num);
    setnoHint(0);
    settries(3);
    setStatus("Guess Game");
    setinputNum("");
  }

  //Play Again from Start
  function playagain() {
    let num = Math.floor(Math.random() * 10);
    setGuessNum(num);
    setuserScore(0);
    setnoHint(0);
    settries(3);
    setround(1);
    setStatus("Guess Game");
    setinputNum(GAME_START);
  }

  //Back to Home Screen
  function backtohome() {
    let num = Math.floor(Math.random() * 10);
    setGuessNum(num);
    setuserScore(0);
    setnoHint(0);
    settries(3);
    setround(1);
    setStatus("Guess Game");
    setinputNum(GAME_START);
  }

  //Home Screen
  const homeScreen = (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <AppText
        style={{
          textAlign: "center",
          fontSize: 35,
          color: colors.white,
          fontWeight: "bold",
          position: "absolute",
          top: 50,
        }}
      >
        GUESS A NUMBER
      </AppText>

      <View
        style={{
          backgroundColor: "#8a2be290",
          borderWidth: 2,
          borderColor: colors.white,
          padding: 15,
        }}
      >
        <AppText
          style={{
            textAlign: "center",
            fontSize: 25,
            color: colors.white,
            fontWeight: "bold",
            alignItems: "center",
          }}
        >
          Game Rules
        </AppText>
        <AppText
          style={{
            textAlign: "center",
            fontSize: 20,
            color: colors.white,
            alignItems: "center",
          }}
        >
          Correct guess gives 5 points {"\n"}
          Enter a Number to get Hint {"\n"}
          Hint deduct 2 Points {"\n"}
        </AppText>
      </View>
      <View
        style={{
          padding: 20,
          alignItems: "center",
          width: "100%",
        }}
      >
        <AppButton
          title="Start"
          backgroundColor={colors.danger}
          onPress={() => setinputNum(0)}
        />
      </View>
    </View>
  );

  //Main Game Screen
  const guessGame = (
    <View>
      {tries === 0 || status === "You Won!" ? (
        <Text></Text>
      ) : (
        <View
          style={{
            alignSelf: "center",
            borderWidth: 2,
            borderColor: colors.white,
            padding: 10,
            backgroundColor: "#8a2be290",
            marginTop: 20,
          }}
        >
          <View style={{ width: "100%", paddingHorizontal: 25 }}>
            <AppText
              style={{
                textAlign: "center",
                color: colors.white,
                fontWeight: "bold",
              }}
            >
              Tries Left : {tries}
            </AppText>
          </View>
          <View style={{ width: "100%", paddingHorizontal: 25 }}>
            <AppText
              style={{
                textAlign: "center",
                color: colors.white,
                fontWeight: "bold",
              }}
            >
              Score : {userScore}
            </AppText>
          </View>
        </View>
      )}
      <AppText
        style={{
          textAlign: "center",
          fontSize: 35,
          color: colors.white,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        {status}
      </AppText>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.white,
          width: "60%",
          height: 50,
          alignSelf: "center",
        }}
      >
        <AppText
          style={{
            textAlign: "center",
            fontSize: 40,
            color: colors.white,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {inputNum}
        </AppText>
      </View>
      <View style={{ marginVertical: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <AppNumButton title="1" onPress={numClick.bind(this, 1)} />

          <AppNumButton title="2" onPress={numClick.bind(this, 2)} />

          <AppNumButton title="3" onPress={numClick.bind(this, 3)} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <AppNumButton title="4" onPress={numClick.bind(this, 4)} />

          <AppNumButton title="5" onPress={numClick.bind(this, 5)} />

          <AppNumButton title="6" onPress={numClick.bind(this, 6)} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <AppNumButton title="7" onPress={numClick.bind(this, 7)} />

          <AppNumButton title="8" onPress={numClick.bind(this, 8)} />

          <AppNumButton title="9" onPress={numClick.bind(this, 9)} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <AppNumButton
            style={{ paddingHorizontal: 0 }}
            title="Clear"
            onPress={numClick.bind(this, 10)}
          />

          <AppNumButton title="0" onPress={numClick.bind(this, 0)} />

          <AppNumButton title="<=" onPress={numClick.bind(this, 11)} />
        </View>
      </View>

      <View style={{ width: "100%", paddingHorizontal: 25 }}>
        {tries === 0 || status === "You Won!" ? (
          <Text></Text>
        ) : (
          <AppButton
            backgroundColor={colors.primary}
            fontWeight="bold"
            title="Guess"
            onPress={guessNumber}
          />
        )}
      </View>

      <View style={{ width: "100%", paddingHorizontal: 25 }}>
        {tries === 0 || status === "You Won!" ? (
          <Text></Text>
        ) : (
          <AppButton
            backgroundColor={colors.danger}
            title="HINT"
            onPress={hint}
          />
        )}
      </View>

      {tries === 0 || status === "You Won!" ? (
        <View
          style={{
            alignSelf: "center",
            borderWidth: 2,
            borderColor: colors.white,
            paddingVertical: 10,
            paddingHorizontal: 25,
            backgroundColor: "#8a2be290",
            width: "50%",
          }}
        >
          <AppText
            style={{
              fontSize: 18,
              color: colors.white,
              fontWeight: "bold",
            }}
          >
            Round Completed ! {"\n"}
            Tries Left : {tries} {"\n"}
            Hints Used : {noHint} {"\n"}
            Correct Answer : {guessNum} {"\n"}
            Round {round} Score : {userScore} {"\n"}
          </AppText>
        </View>
      ) : (
        <Text></Text>
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          paddingHorizontal: 25,
        }}
      >
        {tries === 0 || status === "You Won!" ? (
          <AppButton
            width="40%"
            backgroundColor={colors.danger}
            title="Play Again"
            onPress={continueGame}
          />
        ) : (
          <Text></Text>
        )}
        {tries === 0 || status === "You Won!" ? (
          <AppButton
            width="40%"
            backgroundColor={colors.primary}
            title="Results"
            onPress={() => setinputNum(RESULTS)}
          />
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );

  //Final Results Screen
  const resultScreen = (
    <View>
      <AppText
        style={{
          textAlign: "center",
          fontSize: 50,
          color: colors.white,
          fontWeight: "bold",
          marginBottom: 50,
        }}
      >
        -- RESULTS --
      </AppText>

      <View
        style={{
          paddingVertical: 20,
          alignItems: "center",
          borderWidth: 5,
          borderRadius: 25,
          borderColor: colors.white,
          marginHorizontal: 30,
        }}
      >
        <AppText
          style={{ color: colors.white, marginVertical: 5, fontSize: 25 }}
        >
          Total Rounds : {round}
        </AppText>
        <AppText
          style={{ color: colors.white, marginVertical: 5, fontSize: 25 }}
        >
          Total Score : {userScore}
        </AppText>
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 50 }}>
        <AppButton
          backgroundColor={colors.primary}
          title="Back to Home"
          onPress={backtohome}
        />
        <AppButton
          backgroundColor={colors.danger}
          title="Play Again"
          onPress={playagain}
        />
      </View>
    </View>
  );

  return (
    <ImageBackground
      blurRadius={3}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
      source={require("./assets/image.jpg")}
    >
      <Screen style={styles.container}>
        {inputNum === GAME_START
          ? homeScreen
          : inputNum === RESULTS
          ? resultScreen
          : guessGame}
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});
