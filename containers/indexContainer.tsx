import About from "@/components/Index/about";
import Collections from "@/components/Index/collections";
import Contents from "@/components/Index/contents";
import Search from "@/components/Index/search";

const IndexContainer = () => {
  return (
    <div className="main-content-index">
      <Search />
      <About />
      <Contents />
      <Collections />
    </div>
  );
};
export default IndexContainer;
