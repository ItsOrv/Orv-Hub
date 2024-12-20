import TronWeb from 'tronweb';
import axios from 'axios';

// تنظیمات TronWeb
const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { "TRON-PRO-API-KEY": "your_api_key" },
    privateKey: 'your_private_key'
});

// بررسی تراکنش‌های Tron
export const checkTronTransaction = async (transactionId: string) => {
    const transaction = await tronWeb.trx.getTransaction(transactionId);
    if (transaction.ret[0].contractRet === 'SUCCESS') {
        return true; // تراکنش موفقیت‌آمیز
    }
    return false; // تراکنش ناموفق
};

// بررسی تراکنش‌های TON از طریق Toncenter API
export const checkTONTransaction = async (transactionId: string) => {
    const response = await axios.get(`https://toncenter.com/api/v2/getTransaction?id=${transactionId}`);
    if (response.data.status === 'success') {
        return true; // تراکنش موفقیت‌آمیز
    }
    return false; // تراکنش ناموفق
};
