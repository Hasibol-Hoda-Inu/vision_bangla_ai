import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateEconomicStabilization,
  evaluateTruthBeam,
  calculateTrafficFlow,
  processSosReport,
} from './memeRules';

test('calculateEconomicStabilization returns high reserves at stable dollar rate', () => {
  const result = calculateEconomicStabilization(100);
  assert.equal(result.isPerfect, true);
  assert.ok(result.reservesBillionUsd >= 40);
  assert.ok(result.inflationPct < 5);
  assert.ok(result.verdictBn.includes('উন্নয়ন'));
});

test('calculateEconomicStabilization reacts to high dollar rate', () => {
  const result = calculateEconomicStabilization(135);
  assert.equal(result.isPerfect, false);
  assert.ok(result.verdictBn.includes('হুন্ডি'));
});

test('evaluateTruthBeam detects Canadian Begum Para lie', () => {
  const result = evaluateTruthBeam('আমি কানাডার বেগম পাড়ায় কোনো বাড়ি কিনি নাই');
  assert.equal(result.lieScore, 100);
  assert.equal(result.isGuilty, true);
  assert.ok(result.verdictBn.includes('প্রমাণ দাও'));
});

test('evaluateTruthBeam detects govt office bribe and durnity', () => {
  const result = evaluateTruthBeam('আমি কোনো ঘুষ নেই নাই, ফাইল এমনি টেবিলে পড়ে ছিল');
  assert.ok(result.lieScore >= 95);
  assert.equal(result.isGuilty, true);
  assert.ok(result.verdictBn.includes('মাসুদ ভালো হয়ে যাও'));
});

test('calculateTrafficFlow scales speed and reduces delay with discipline', () => {
  const disciplined = calculateTrafficFlow(100);
  assert.ok(disciplined.averageSpeedKmH > 40);
  assert.ok(disciplined.delayMinutes < 15);
  assert.ok(disciplined.statusBn.includes('ওই মামা অটো পাস'));
});

test('processSosReport handles emergency in Mohammadpur', () => {
  const outcome = processSosReport('মোহাম্মদপুরে কিছু ছেলে পিছু নিয়েছে');
  assert.equal(outcome.forcefieldActive, true);
  assert.ok(outcome.responseTimeSeconds < 0.1);
  assert.ok(outcome.actionSummaryBn.includes('মোহাম্মদপুর'));
});
