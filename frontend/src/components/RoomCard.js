import React from "react";
import styles from "../styles/RoomCard.module.css";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  //   return (
  //     <div onClick={() => navigate(`/room/${room.id}`)} className={styles.card}>
  //       <h3 className={styles.topic}>{room.topic}</h3>
  //       <div
  //         className={`${styles.speakers} ${
  //           room.speakers.length === 1 ? styles.singleSpeaker : ""
  //         }`}
  //       >
  //         <div className={styles.avatars}>
  //           {room.speakers.map((speaker) => (
  //             <img key={speaker.id} src={speaker.avatar} alt="speaker-avatar" />
  //           ))}
  //         </div>
  //         <div className={styles.names}>
  //           {room.speakers.map((speaker) => (
  //             <div key={speaker.id} className={styles.nameWrapper}>
  //               <span>{speaker.name}</span>
  //               <img src="/img/chat-bubble.png" alt="chat-bubble" />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //       <div className={styles.peopleCount}>
  //         <span>{room.totalPeople}</span>
  //         <img src="/img/user-icon.png" alt="user-icon" />
  //       </div>
  //     </div>
  //   );
  return (
    <div onClick={() => navigate(`/room/${room.id}`)} className={styles.card}>
      <div>
        <img className={styles.image} src={room.image} alt="background" />
      </div>
      <div>
        <h3 className={styles.topic}>{room.topic}</h3>
      </div>
      <div>
        <h1 className={styles.description}>{room.description}</h1>
      </div>
      <div className={styles.peopleCount}>
        <img src="/img/user-icon.png" alt="user-icon" />
        <span>{room.totalPeople}</span>
      </div>
    </div>
  );
};

export default RoomCard;
