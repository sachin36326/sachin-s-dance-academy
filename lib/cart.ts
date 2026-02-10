// Cart management

export interface CartItem {
  courseId: string;
  title: string;
  price: number;
  thumbnail: string;
  instructor: string;
}

const CART_STORAGE_KEY = 'sachinsdance_cart';

export function getCart(): CartItem[] {
  if (typeof window !== 'undefined') {
    const cartStr = localStorage.getItem(CART_STORAGE_KEY);
    if (cartStr) {
      try {
        return JSON.parse(cartStr);
      } catch {
        return [];
      }
    }
  }
  return [];
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const exists = cart.find(i => i.courseId === item.courseId);
  if (!exists) {
    cart.push(item);
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }
}

export function removeFromCart(courseId: string) {
  const cart = getCart();
  const filtered = cart.filter(i => i.courseId !== courseId);
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(filtered));
  }
}

export function clearCart() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CART_STORAGE_KEY);
  }
}

export function getCartCount(): number {
  return getCart().length;
}
