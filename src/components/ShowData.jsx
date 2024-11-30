//* Here we discuss how to display data to the user.

const user = {
  name: "Angel Jackson",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
  description: "Medical Doctor",
};

const ShowData = () => {
  return (
    <div>
      <h3>Rendering user data in the ui</h3>
      <h4>Name: {user.name}</h4>
      <img
        src={user.imageUrl}
        alt={user.description}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "10px",
        }}
      />
      <h5>Job Title: {user.description}</h5>
    </div>
  );
};
export default ShowData;
