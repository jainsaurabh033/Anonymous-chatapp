import React, { useState } from "react";
import styles from "../styles/Rooms.module.css";
import RoomCard from "./RoomCard";
import logo from "../assets/images.png";
import AddRoom from "./AddRoom";

const rooms = [
  {
    id: 1,
    topic: "Which framework best for frontend ?",
    description:
      "fjkasdl;fjds;alfs;afjs;afkjs;alfjsklfjoitugwjktwkljglagjk;alkjfglak;gk;algja;klgja;lkgjakjlg",
    image: logo,

    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "../assets/images.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "../assets/images.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 3,
    topic: "What’s new in machine learning?",
    image: logo,
    description:
      "fjkasdl;fjds;alfs;afjs;afkjs;alfjsklfjoitugwjktwkljglagjk;alkjfglak;gk;algja;klgja;lkgjakjlg",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/img/images.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/img/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 4,
    topic: "Why people use stack overflow?",
    description:
      "fjkasdl;fjds;alfs;afjs;afkjs;alfjsklfjoitugwjktwkljglagjk;alkjfglak;gk;algja;klgja;lkgjakjlg",
    image: logo,

    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/img/monkey-avatar.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/img/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 5,
    topic: "Artificial inteligence is the future?",
    description:
      "fjkasdl;fjds;alfs;afjs;afkjs;alfjsklfjoitugwjktwkljglagjk;alkjfglak;gk;algja;klgja;lkgjakjlg",
    image: logo,

    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/img/monkey-avatar.png",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar: "/img/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
];

const Rooms = () => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}> All rooms</span>
            <div className={styles.searchBox}>
              <img src="/img/search-icon.png" alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModal} className={styles.startRoomButton}>
              <img src="/img/add-room-icon.png" alt="add-room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>
        <div className={styles.roomList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      {showModal && <AddRoom onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Rooms;
