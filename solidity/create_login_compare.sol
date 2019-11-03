pragma solidity >=0.4.0 <0.6.0;
contract Create_Login_Compare{
    // string current_email;
    uint last_address_used=0;
    // mapping(uint256=>string) public emails;
    string[] emails;
    mapping(string=>string) names;
    mapping(string=>address) addresses;
    mapping(string=>string) passwords;
    // function set_current_email(string memory email) public {
    //     current_email=email;
    // }
    function set_email(string memory email) public {
        emails.push(email);
    }
    function set_name(string memory name,string memory current_email) public { 
        names[current_email]=name;
    }
    function set_address(address addr,string memory current_email) public { 
        addresses[current_email]=addr;
    }
    function set_password(string memory password,string memory current_email) public { 
        passwords[current_email]=password;
    }
    function set_last_address_used(uint num) public {
        last_address_used=num;
    }
    function get_last_address_used() public view returns(uint) {
        return last_address_used;
    }
    // function get_current_email() public view returns(string memory) {
    //     return current_email;
    // }
    function get_email_checked(string memory email) public view returns(bool){
        for(uint i=0;i<emails.length;i++){
            // string memory email_=emails[i];
            if(keccak256(abi.encodePacked(email)) == keccak256(abi.encodePacked(emails[i])) && emails.length!=0)
            return true;
        }
        return false;
    }
    function get_emails_length() public view returns(uint){
        return emails.length;
    }
    function get_name(string memory current_email) public view returns(string memory){  // view means it will only return and not alter
        return names[current_email];
    }
    function get_address(string memory current_email) public view returns(address){ 
        return addresses[current_email];
    }
    function get_password_checked(string memory psw,string memory current_email) public view returns(bool){ 
        if(keccak256(abi.encodePacked(passwords[current_email])) == keccak256(abi.encodePacked(psw))){
            return true;
        }
        return false;
    }
}