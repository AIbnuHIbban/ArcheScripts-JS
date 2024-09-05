function terbilang(angka) {
    const angkaHuruf = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
    const satuan = ['Ribu', 'Juta'];

    if (angka === 0) return 'Nol';
    
    function sebutNominal(n) {
        if (n < 10) return angkaHuruf[n];
        if (n < 20) return (n === 10 ? 'Sepuluh' : angkaHuruf[n - 10] + ' Belas');
        if (n < 100) return angkaHuruf[Math.floor(n / 10)] + ' Puluh ' + angkaHuruf[n % 10];
        if (n < 1000) {
            if (n === 100) return 'Seratus';
            if (Math.floor(n / 100) === 1) return 'Seratus ' + sebutNominal(n % 100);
            return angkaHuruf[Math.floor(n / 100)] + ' Ratus ' + sebutNominal(n % 100);
        }
        return '';
    }

    function toRupiah(n, level = 0) {
        if (n === 0) return '';
        const mod = n % 1000;
        const strMod = (mod === 1 && level === 0 ? 'Seribu' : sebutNominal(mod));
        const result = strMod + (level > 0 && mod > 0 ? ' ' + satuan[level - 1] : '');
        return toRupiah(Math.floor(n / 1000), level + 1) + ' ' + result;
    }

    return toRupiah(angka).trim() + ' Rupiah';
}