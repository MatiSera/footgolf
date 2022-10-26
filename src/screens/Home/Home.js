import React from 'react';
import classes from '../../App.module.css';
import useStore from '../../state/state';

const Home = () => {
  const hole = useStore((state) => state.hole);
  const game = useStore((state) => state.game);
  console.log("🚀 ~ file: Home.js ~ line 8 ~ Home ~ game", game)
  const increaseScore = useStore((state) => state.increaseScore)
  const doubleIncreaseScore = useStore((state) => state.doubleIncreaseScore)
  const newHole = useStore((state) => state.newHole)



  return (
    <div className={classes.app}>
      <div className={classes.background} />
      <div className={classes.buttonContainer}>
        <p>{hole}</p>
        <button onClick={doubleIncreaseScore}>Afuera</button>
        <button onClick={increaseScore}>Tiro</button>
        <button onClick={doubleIncreaseScore}>Amarillo</button>
        <button onClick={newHole}>Nuevo hoyo</button>
        {game.map((hole, index) => (
          <p key={index}>{hole}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;