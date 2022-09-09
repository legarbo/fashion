import Directory from '../../components/directory/directory.component.jsx';

const Home = () => {

 const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    styles: ["category-container a"]
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    styles: ["category-container b"]
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    styles: ["category-container c"]
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    styles: ["category-container d"]
  },
  {
    id: 5,
    title: "men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    styles: ["category-container e"]
  }
];

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
