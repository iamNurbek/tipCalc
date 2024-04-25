document.querySelector('#tip-form').addEventListener('input', function () {
  updateTipCalculation();
});

function updateTipCalculation() {
  const bill = parseFloat(document.getElementById('billTotal').value);
  const tipPercent = parseInt(document.getElementById('tipInput').value, 10);
  document.getElementById('tipOutput').textContent = `${tipPercent}%`;

  if (!isNaN(bill) && bill > 0) {
    const tipValue = bill * (tipPercent / 100);
    const finalBill = bill + tipValue;

    document.getElementById('tipAmount').value = tipValue.toFixed(2);
    document.getElementById('totalBillWithTip').value = finalBill.toFixed(2);
    document.getElementById('results').style.display = 'block';
  } else {
    document.getElementById('results').style.display = 'none';
  }
}

document.querySelectorAll('.quick-tip').forEach((button) => {
  button.addEventListener('click', function () {
    const quickTipPercent = parseInt(this.dataset.tip);
    document.getElementById('tipInput').value = quickTipPercent;
    updateTipCalculation();
  });
});
