test_rpc='HTTP://172.0.1.212:7545'
if(typeof(web3)!=='undefined'){	
	web3=new Web3(web3.currentProvider)
}
else{	
    web3=new Web3(new Web3.providers.HttpProvider(test_rpc))
}
web3.eth.defaultAccount=web3.eth.accounts[0] //first account at 0 index--> must be done otherwise invalid address error
deposit_and_transfer_abi=web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "get_balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
])
deposit_and_transfer=deposit_and_transfer_abi.at('0xc7C114402BA71B2A3f0952F92B7eD5AB6D9a6682')
create_login_compare_abi=web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "get_last_address_used",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "set_address",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			}
		],
		"name": "get_email_checked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			}
		],
		"name": "set_email",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "psw",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "get_password_checked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_emails_length",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "get_address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "get_name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "set_password",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "set_last_address_used",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "set_name",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
])
create_login_compare=create_login_compare_abi.at('0x740A0004970074BB4Be7661115B5c2eD75eA57AC')
connections_blocks_abi=web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "get_blocks",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "get_connections",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_block",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "add_block",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "current_email",
				"type": "string"
			}
		],
		"name": "add_connection",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
])
connections_blocks=connections_blocks_abi.at('0xfa7f9Bca4D2B29125A93147Ec77f771D6d35dA23')
// current_email=create_login_compare.get_current_email()
current_email=sessionStorage.getItem("email")
name=create_login_compare.get_name(current_email)
address=create_login_compare.get_address(current_email)
balance=deposit_and_transfer.get_balance(address)
str_balance=balance["c"][0].toString()
console.log(balance)
if(balance["c"].length!=1){
	length_2=balance["c"][1].toString().length
}
else{
	length_2=0
}
for(i=0;i<=balance["e"]-balance["c"][0].toString().length-length_2;i++){
	str_balance=str_balance+"0"
}
if(balance["c"].length!=1){
	str_balance=str_balance+balance["c"][1].toString()
}
else{
}
console.log(str_balance)
num_balance=parseInt(str_balance)
num_balance=num_balance/1000000000000000000;
num_balance=num_balance.toFixed(2)
console.log(num_balance) 
document.getElementById("total_eth").innerHTML=num_balance
document.getElementById("name_displayed").innerHTML=name
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );
if(page=="send_eth.html"){
	// reciever_email=connections_blocks.get_current_reciever_email()
	sessionStorage.getItem("reciever_email")
	// create_login_compare.set_current_email(reciever_email)
	reciever_name=create_login_compare.get_name(sessionStorage.getItem("reciever_email"))
	// create_login_compare.set_current_email(current_email)
	document.getElementById("reciever_name").innerHTML=reciever_name
}
else if(page=="successfully_sended.html"){
	console.log("here")
	amount_to_send=sessionStorage.getItem("just_transfered")
	document.getElementById("amount_to_send").innerHTML=amount_to_send
	reciever_email=sessionStorage.getItem("reciever_email")
	reciever_name=create_login_compare.get_name(reciever_email)
	document.getElementById("reciever_name").innerHTML=reciever_name
	console.log("here1")
}

function deposit_eth(){
	amount_to_deposit=document.getElementById("amount_to_deposit").value
	unit=document.getElementById("unit").value
	if(unit=="Gwei"){
		amount_to_deposit=amount_to_deposit*1000000000
	}
	else if(unit=="finney"){
		amount_to_deposit=amount_to_deposit*1000000000000000
	}
	else if(unit=="eth"){
		amount_to_deposit=amount_to_deposit*1000000000000000000
	}
	from_address=create_login_compare.get_address(sessionStorage.getItem("email"))
	console.log(from_address)
	deposit_and_transfer.deposit({value:amount_to_deposit,from:from_address},function(err,deposited){
		if(deposited){
			console.log(amount_to_deposit+" wei are successfully deposited")
			// transfered=deposit_and_transfer.transfer(create_login_compare.get_address(),amount_to_deposit)
			window.location.replace("index.html")
		}
		else{
			console.log(err)
		}
	})	
}
function enter_reciever_email(){
	// current_email=create_login_compare.get_current_email()
	current_email=sessionStorage.getItem("email")
	console.log(current_email)
	// connections_blocks.set_current_email(current_email)
	reciever_email=document.getElementById('reciever_email').value
	console.log(reciever_email)
	if(create_login_compare.get_email_checked(reciever_email)){
		connections=connections_blocks.get_connections(current_email)
		// connections_blocks.set_current_reciever_email(reciever_email)
		sessionStorage.setItem("reciever_email",reciever_email)
		console.log(connections.includes(reciever_email))
		if(!connections.includes(reciever_email)){
			console.log("connection added1")
			connections_blocks.add_connection(reciever_email,current_email)
			console.log("connection added2")
		}
		window.location.href="send_eth.html"
	}
	else{
		window.location.href="email_not_found.html"
	}
}
function enter_amount_to_send(){
	amount_to_send=document.getElementById("amount_to_send").value
	unit=document.getElementById("unit").value
	if(unit=="Gwei"){
		amount_to_send=amount_to_send*1000000000
	}
	else if(unit=="finney"){
		amount_to_send=amount_to_send*1000000000000000
	}
	else if(unit=="eth"){
		amount_to_send=amount_to_send*1000000000000000000
	}
	console.log(amount_to_send)
	if(amount_to_send<=balance){
		current_email=sessionStorage.getItem("email")
		from_address=create_login_compare.get_address(current_email)
		reciever_email=sessionStorage.getItem("reciever_email")
		to_address=create_login_compare.get_address(reciever_email)
		transfered=deposit_and_transfer.transfer(to_address,amount_to_send,{from:from_address})
		if(transfered){
			console.log(amount_to_send+" wei are successfully transfered")
			deposit_and_transfer.deposit({value:amount_to_send,from:to_address},function(err,deposited){
				if(deposited){
					console.log(amount_to_send+" wei are successfully deposited")
					// transfered=deposit_and_transfer.transfer(create_login_compare.get_address(),amount_to_deposit)
					sessionStorage.setItem("just_transfered",amount_to_send/1000000000000000000)
					window.location.replace("successfully_sended.html")
				}
				else{
					console.log(err)
				}
			})
		}
		else{
			console.log(err)
		}
	}
	else{
		window.location.replace("not_enough_balance.html")
	}
}
console.log(connections_blocks.get_connections(current_email))
function withdraw_eth(){
	amount_to_withdraw=document.getElementById("amount_to_withdraw").value
	unit=document.getElementById("unit").value
	if(unit=="Gwei"){
		amount_to_withdraw=amount_to_withdraw*1000000000
	}
	else if(unit=="finney"){
		amount_to_withdraw=amount_to_withdraw*1000000000000000
	}
	else if(unit=="eth"){
		amount_to_withdraw=amount_to_withdraw*1000000000000000000
	}
	console.log(amount_to_withdraw)
	if(amount_to_withdraw<=balance){
		from_address=create_login_compare.get_address(current_email)
		withdrawed=deposit_and_transfer.withdraw(amount_to_withdraw,{from:from_address})
		if(withdrawed){
			console.log(amount_to_withdraw+ "wei are successfully withdrawed")
			window.location.replace("index.html")
		}
		else{
			console.log("ERROR")
		}
	}
	else{
			window.location.replace("send_eth/not_enough_balance.html")
	}
}