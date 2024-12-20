pragma solidity ^0.8.0;

interface ITRC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TronPaymentProcessor {
    address public owner;
    ITRC20 public token;

    event PaymentReceived(address payer, uint256 amount);
    event PaymentWithdrawn(address owner, uint256 amount);

    constructor(address _token) {
        owner = msg.sender;
        token = ITRC20(_token);
    }

    function receivePayment(address payer, uint256 amount) external {
        require(token.transferFrom(payer, address(this), amount), "Payment failed");
        emit PaymentReceived(payer, amount);
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        uint256 balance = token.balanceOf(address(this));
        require(balance > 0, "No balance to withdraw");
        token.transfer(owner, balance);
        emit PaymentWithdrawn(owner, balance);
    }
}
