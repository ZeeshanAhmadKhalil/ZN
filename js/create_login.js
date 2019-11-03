test_rpc='HTTP://192.168.1.7:7545'
var accounts=new Accounts(test_rpc)
var is_created;
if(typeof(web3)!=='undefined'){
	web3=new Web3(web3.currentProvider)
}
else{
    web3=new Web3(new Web3.providers.HttpProvider(test_rpc))
}
// console.log("here="+web3.eth.getBalance(web3.eth.accounts[0]))
web3.eth.defaultAccount=web3.eth.accounts[0]
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
console.log(parseInt(create_login_compare.get_last_address_used())+1)
function create_new_account(){
	address_index=parseInt(create_login_compare.get_last_address_used())+1
    new_account=web3.eth.accounts[address_index]
	name=document.getElementById('name').value
	email=document.getElementById('email').value
	password=document.getElementById('password').value
	// console.log(password)
	// console.log(new_account.address)
	// console.log(create_login_compare)
	console.log(create_login_compare.get_email_checked(email))
	if(!create_login_compare.get_email_checked(email)){
		// create_login_compare.set_current_email(email)
		sessionStorage.setItem("email",email)
		create_login_compare.set_email(email)
		// alert("called")
		// console.log(create_login_compare.get_emails_length())
		create_login_compare.set_name(name,sessionStorage.getItem("email"))
		create_login_compare.set_address(new_account,sessionStorage.getItem("email"))
		create_login_compare.set_password(password,sessionStorage.getItem("email"))
		create_login_compare.set_last_address_used(address_index)
		window.location.replace("index.html")
		// console.log("comming here")
	}
}
function log_in() {
	// alert("working 1")
	email=document.getElementById('email').value
	password=document.getElementById('password').value	
	if(create_login_compare.get_email_checked(email)){
		// alert("working 2")
		// create_login_compare.set_current_email(email)
		sessionStorage.setItem("email",email)
		if(create_login_compare.get_password_checked(password,email)){
			// alert("working 3")
			sessionStorage.setItem("email",email)
			window.location.replace("index.html") //replace means back button will not work
			console.log("came here")
		}
		else{
			alert("the entered password or email is incorrect")
		}
	}
	else{
		alert("the entered password or email is incorrect")
	}
}
// console.log(is_created)
// console.log(create_login_compare.get_name())
// console.log(create_login_compare.get_address())
// console.log(create_login_compare.get_emails_length()["c"]["0"])  //--> to check total registered emails