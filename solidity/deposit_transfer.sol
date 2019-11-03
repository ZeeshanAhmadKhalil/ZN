pragma solidity >=0.4.0 <0.6.0;

contract Exchange {

    mapping (address => uint256) public balances;
    uint256 public balance;

    // event LogDeposit(address sender, uint amount);
    // event LogWithdrawal(address receiver, uint amount);
    // event LogTransfer(address sender, address to, uint amount);

    function deposit() payable public returns(bool success) {
        balances[msg.sender] += msg.value;
        balance = balances[msg.sender];
        // emit LogDeposit(msg.sender, msg.value);
        return true;
    }

    function withdraw(uint value) public returns(bool success) {
        if(balances[msg.sender] < value)
        return false;
        msg.sender.transfer(value);
        // emit LogWithdrawal(msg.sender, value);
        balances[msg.sender] -= value;
        balance = balances[msg.sender];
        return true;
    }

    function transfer(address payable to, uint value) public returns(bool success) {
        if(balances[msg.sender] < value)
        return false;
        balances[msg.sender] -= value;
        balance = balances[msg.sender];
        to.transfer(value);
        // emit LogTransfer(msg.sender, to, value);
        return true;
    }
}