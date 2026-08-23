const allowed = new Set([
  'https://www.criticalthinking.org/store/get_file.php?inventories_files_id=422&inventories_id=231',
  'https://api.pageplace.de/preview/DT0400.9781000489293_A42495157/preview-9781000489293_A42495157.pdf',
  'https://padesky.com/wp-content/uploads/2012/11/socquest.pdf',
  'https://kpu.pressbooks.pub/leveltwopeertutoringfundamentals/chapter/use-socratic-questions/',
]);

module.exports = (output) => {
  const urls = output.match(/https?:\/\/[^\s)>\]}]+/g) || [];
  const normalized = urls.map((url) => url.replace(/[.,;:]+$/, ''));
  const rejected = normalized.filter((url) => !allowed.has(url));
  return {
    pass: rejected.length === 0,
    score: rejected.length ? 0 : 1,
    reason: rejected.length ? `unapproved URL(s): ${rejected.join(', ')}` : 'all emitted URLs are allowlisted',
  };
};
