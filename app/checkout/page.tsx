'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CreditCard, Smartphone, CheckCircle, Loader } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [processing, setProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check authentication
    const userStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_user') : null;
    if (!userStr) {
      router.push('/login?redirect=/checkout');
      return;
    }
    setIsAuthenticated(true);

    // Load cart
    const cartStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_cart') : null;
    if (cartStr) {
      try {
        const cart = JSON.parse(cartStr);
        if (cart.length === 0) {
          router.push('/cart');
          return;
        }
        setCartItems(cart);
      } catch { }
    } else {
      router.push('/cart');
    }
  }, [router]);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const paymentMethods = [
    { id: 'gpay', name: 'Google Pay', icon: '🔵', description: 'Pay with Google Pay' },
    { id: 'paytm', name: 'Paytm', icon: '💙', description: 'Pay with Paytm Wallet' },
    { id: 'upi', name: 'UPI', icon: '📱', description: 'Pay with any UPI app' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', description: 'Pay with card' },
  ];

  const handlePayment = async () => {
    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }

    setProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mark courses as enrolled
    const enrolledStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_enrolled') : null;
    let enrolled = [];
    if (enrolledStr) {
      try {
        enrolled = JSON.parse(enrolledStr);
      } catch { }
    }

    cartItems.forEach(item => {
      if (!enrolled.includes(item.courseId)) {
        enrolled.push(item.courseId);
      }
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem('sachinsdance_enrolled', JSON.stringify(enrolled));
      localStorage.removeItem('sachinsdance_cart');
    }

    setProcessing(false);
    setShowSuccess(true);

    // Redirect to dashboard after 3 seconds
    setTimeout(() => {
      router.push('/dashboard');
    }, 3000);
  };

  if (!isAuthenticated) {
    return null;
  }

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-light flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            You have successfully enrolled in {cartItems.length} course{cartItems.length > 1 ? 's' : ''}.
          </p>
          <p className="text-sm text-gray-500">Redirecting to your dashboard...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-light">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Select Payment Method</h2>

                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`w-full p-4 border-2 rounded-xl text-left transition-all ${selectedPayment === method.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'
                        }`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{method.icon}</span>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">{method.name}</p>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                        {selectedPayment === method.id && (
                          <CheckCircle className="w-6 h-6 text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={!selectedPayment || processing}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {processing ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Pay ₹{total.toLocaleString()}</span>
                  </>
                )}
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item, index) => (
                    <div key={`${item.courseId}-${index}`} className="flex items-start space-x-3">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm truncate">{item.title}</p>
                        <p className="text-sm text-gray-600">₹{item.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>₹0</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
