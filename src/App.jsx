import { useContext } from "react";
import { CartProvider } from "./context/cart/cartContext";
import { SidebarProvider } from "./context/sidebar/sidebarContext";
import { GalleryProvider } from "./context/gallery/galleryContext";
import { Wrapper } from "./components";

function App() {
  return (
    <CartProvider>
      <GalleryProvider>
        <SidebarProvider>
          <Wrapper />
        </SidebarProvider>
      </GalleryProvider>
    </CartProvider>
  );
}

export default App;
