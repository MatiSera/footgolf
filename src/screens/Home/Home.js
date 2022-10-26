import React, {useState} from 'react';
import classes from '../../App.module.css';
import useStore from '../../state/state';
import Modal from 'react-modal';

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
  const hole = useStore((state) => state.hole);
  const game = useStore((state) => state.game);
  console.log("🚀 ~ file: Home.js ~ line 8 ~ Home ~ game", game)
  const increaseScore = useStore((state) => state.increaseScore)
  const doubleIncreaseScore = useStore((state) => state.doubleIncreaseScore)
  const newHole = useStore((state) => state.newHole)

  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div className={classes.app}>
      <div className={classes.background} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          {game.map((hole, index) => (
            <p key={index}>{hole}, </p>
          ))}
          </div>
          <p><b> Total: </b>{game.reduce((a, b) => a + b, 0)}</p>
      </div>
      </Modal>
      <div className={classes.holeCount}>
        <p>{hole}</p>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.red} onClick={doubleIncreaseScore}>Afuera</button>
        <button className={classes.white} onClick={increaseScore}>Tiro</button>
        <button className={classes.yellow} onClick={doubleIncreaseScore}>Amarillo</button>
        <button className={classes.new} onClick={newHole}>Nuevo hoyo</button>
        <button className={classes.blue} onClick={openModal}>Total</button>
      </div>
    </div>
  );
};

export default Home;