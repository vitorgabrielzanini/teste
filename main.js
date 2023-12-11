document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpfInput');

    cpfInput.addEventListener('input', function () {
      formatCPF(cpfInput);
    });

    function formatCPF(input) {
      let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

      if (value.length > 11) {
        value = value.slice(0, 11); // Limita a 11 dígitos
      }

      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

      input.value = value;
    }
  });
