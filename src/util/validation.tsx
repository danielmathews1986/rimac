
export const validateDocumento = (document: string, type: string) => {
    if (!document.trim()) {
        return 'Campo obligatorio';
    }

    if (!/^\d+$/.test(document)) {
        return 'Debe contener solo números';
    }

    const expectedLength = type === 'DNI' ? 8 : type === 'RUC' ? 11 : null;

    if (expectedLength && document.length !== expectedLength) {
        return `${type} debe tener ${expectedLength} dígitos`;
    }

    return null;
};

export const validateCelular = (celular: string) => {
    if (!celular.trim()) {
        return 'Campo obligatorio';
    }

    if (!/^\d+$/.test(celular)) {
        return 'Debe contener solo números';
    }

    if (celular.length !== 9) {
        return 'Celular debe tener 9 dígitos';
    }

    return null;
};