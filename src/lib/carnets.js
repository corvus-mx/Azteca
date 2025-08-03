// src/lib/carnets.js
import carnetsData from './carnets.json' assert { type: 'json' };

export const carnetsDatabase = new Map(Object.entries(carnetsData));

export function isValidHashFormat(hash) {
  const pattern = /^CA-(?:[A-Z0-9]{4}-){3}[A-Z0-9]{2,4}$/;
  return pattern.test(hash);
}

export function verifyHashExists(hash) {
  return carnetsDatabase.has(hash);
}

export function getCarnetsStats() {
  const total = carnetsDatabase.size;
  const tipos = {};
  const especialidades = {};
  
  for (const carnet of carnetsDatabase.values()) {
    tipos[carnet.tipo] = (tipos[carnet.tipo] || 0) + 1;
    especialidades[carnet.especialidad] = (especialidades[carnet.especialidad] || 0) + 1;
  }
  
  return {
    total,
    tipos,
    especialidades,
    activos: Array.from(carnetsDatabase.values()).filter(c => c.estado === 'activo').length
  };
}
