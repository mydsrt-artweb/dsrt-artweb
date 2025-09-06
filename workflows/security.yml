name: Security Scan

on:
  schedule:
    - cron: '0 0 * * 0' # weekly

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run npm audit
        run: npm audit --audit-level=moderate
