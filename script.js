let balance = 0;

function showAddFunds() {
  document.getElementById("addFundsSection").classList.toggle("hidden");
}

function showWithdraw() {
  document.getElementById("withdrawSection").classList.toggle("hidden");
}

function simulateFund() {
  alert("Waiting for confirmation (1 minute)...");
  setTimeout(() => {
    balance += 10; // $10 added
    document.getElementById("balance").innerText = balance;
    alert("$10 has been added to your balance!");
  }, 60000); // 60 seconds
}

function processWithdraw() {
  const acctNum = document.getElementById("acctNum").value;
  if (acctNum.length !== 10) {
    alert("Enter a valid 10-digit Nigerian account number");
    return;
  }

  const nairaAmount = balance * 1460;
  document.getElementById("withdrawResult").innerText =
    `You will receive ₦${nairaAmount.toLocaleString()} in account ${acctNum}`;
}
