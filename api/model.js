const MODELS = {
  redmode2: { id: 'redmode2', label: 'REDMODE 2', description: 'Uncensored · Fast · Free' },
  redmode3: { id: 'redmode3', label: 'REDMODE 3', description: 'Advanced · Deeper reasoning' },
  'redmode3.1': { id: 'redmode3.1', label: 'REDMODE 3.1', description: 'Maximum · Deepest analysis' },
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();
  const data = Object.values(MODELS).map((m) => ({
    id: m.id, object: 'model', created: 1700000000, owned_by: 'redmode', description: m.description,
  }));
  return res.status(200).json({ object: 'list', data });
}
