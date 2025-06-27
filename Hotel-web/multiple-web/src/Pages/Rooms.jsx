import React from "react";
import "./Rooms.css";

const Rooms = () => {
    const rooms = [
      {
        title: "Deluxe Room",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd3DO9L-ZG5qp_p_Y_7oeREMVCM39-bL863YHCLZKwxxFWOtMAmYHyDw&s",
        description: "Spacious and luxurious room with a king-sized bed, ocean view, and modern amenities."
      },
      {
        title: "Family Suite",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9Lof_0dPozpczgDKp_lkjAvKNRRDBs55J-FpRk0AymHpf7Lv-wt1V0I&s",
        description: "Perfect for families, this suite features two bedrooms, a living area, and a private balcony."
      },
      {
        title: "Standard Room",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurj3Yc96B8L2xnctaHxbF2odYSd85pkMxWZIun2WyCO-P_0wkJiczhg4&s",
        description: "A cozy room with all the essentials for a comfortable stay."
      },
      {
        title: "Presidential Suite",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYhcwHeVv0vzU8j1m9AJ6MQQ2oHfrV7JiqfEwdP6BDiDpkIX6aNdfXQA&s",
        description: "Experience unmatched luxury with a private pool, dedicated butler service, and panoramic views."
      },
      {
        title: "Two Bedroom Cabin 2",
        image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ee/2b/8e/tapovan-new-residency.jpg?w=500&h=-1&s=1",
        description: "A special form of accommodation which can be found in some resort hotels. It is a kind of stand-alone house which gives extra privacy and space to hotel guests. " 
      },
      {
        title: "One BedRoom Cabin 1",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMKzonrXOUCtFwrLG-SO3NzYrQS1Sz-Ak8w&s",
        description: "91 Restaurants Tripadvisor is a travel website that provides information and reviews on hotels, restaurants, attractions, and more"
       },
       {
        title: "Queen Room",
        image : "https://setupmyhotel.com/wp-content/uploads/2024/01/image-7.webp?ezimgfmt=rs:300x250/rscb339/ng:webp/ngcb338",
        description: "Queen: A room with a queen-sized bed. May be occupied by one or more people." 
      },
      {
        title: "King Room",
        image : "https://setupmyhotel.com/wp-content/uploads/2024/01/image-17.webp?ezimgfmt=rs:300x250/rscb339/ng:webp/ngcb338",
        description: "King: A room with a king-sized bed. May be occupied by one or more people." 
      },
    ];
  
  return (
    <div className="rooms">
      <div className="room-content">
    <div className="rooms">
      <h2>Our Rooms</h2>
      <p>Discover the perfect room for your stay. Choose from a variety of options tailored to your needs.</p>
      <div className="room-cards">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.title} className="room-image" />
            <h3>{room.title}</h3>
            <p>{room.description}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
    
    </div>
    
    
  );
};

export default Rooms;
