import React, { useState, useEffect } from 'react';

interface PaymentPageProps {
    network: 'tron' | 'ton'; // شبکه انتخاب شده
    amount: number; // مقدار مورد نیاز برای پرداخت
    address: string; // آدرس ولت
    transactionId: string; // شناسه تراکنش
}

const PaymentPage: React.FC<PaymentPageProps> = ({ network, amount, address, transactionId }) => {
    const [timeLeft, setTimeLeft] = useState(900); // 15 دقیقه (900 ثانیه)
    const [paymentStatus, setPaymentStatus] = useState<string>('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setPaymentStatus('Payment time expired');
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handlePaymentVerification = async () => {
        try {
            const response = await fetch('/api/verify-payment', {
                method: 'POST',
                body: JSON.stringify({ transactionId, network }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setPaymentStatus(data.message);
        } catch (error) {
            setPaymentStatus('Payment verification failed');
        }
    };

    return (
        <div>
            <h2>Pay {amount} {network.toUpperCase()} to the following address:</h2>
            <p>{address}</p>
            <p>Time left to complete payment: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>

            <button onClick={handlePaymentVerification}>Verify Payment</button>
            <p>{paymentStatus}</p>
        </div>
    );
};

export default PaymentPage;
