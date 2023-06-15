import { useContext } from "react";
import { WishlistContext } from "../../../context/WishlistContext";
import { Link } from "react-router-dom";
import WishlistCard from "../wishlistCard/WishlistCard";
export const Wishlists = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <div>
      {wishlist.map((list) => (
        <Link to={`/wishlist/${list.id}`}>
          <WishlistCard name={list.name} itemsCount={list.list.length} />
        </Link>
      ))}
    </div>
  );
};
