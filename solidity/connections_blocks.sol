// pragma experimental ABIEncoderV2;
pragma solidity >=0.4.0 <0.6.0;
contract Connections_Blocks{
    // address[] testing_addresses;
    mapping(string=>string) connections;
    mapping(string=>string) blocks;
    // string current_reciever_email;
    // string current_email;
    // function set_current_email(string memory email) public {
    //     current_email=email;
    // }
    // function set_current_reciever_email(string memory email) public {
    //     current_reciever_email=email;
    // }
    function add_connection(string memory email,string memory current_email) public{
        connections[current_email]=string(abi.encodePacked(connections[current_email],",",email));
    }
    function add_block(string memory _block,string memory current_email) public{
        blocks[current_email]=string(abi.encodePacked(blocks[current_email],",",_block));
    }
    // function find_connection(string memory reciever_email) public view returns(bool){
    //     for(uint i=0;i<connections[current_email].length;i++){
    //         if(keccak256(abi.encodePacked(connections[current_email][i])) == keccak256(abi.encodePacked(reciever_email)) && connections[current_email].length!=0)
    //         return true;
    //     }
    //     return false;
    // }
    // function get_current_reciever_email() public view returns(string memory){
    //     return current_reciever_email;
    // }
    function get_blocks(string memory current_email) public view returns(string memory){
        return blocks[current_email];
    }
    function get_connections(string memory current_email) public view returns(string memory){
        return connections[current_email];
    }
    // function add_address(address addr) public{
    //     testing_addresses.push(addr);
    // }
    // function get_addresses() public view returns(address[] memory){
    //     return testing_addresses;
    // }
}