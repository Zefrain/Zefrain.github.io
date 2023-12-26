---
title: insecurity proof failed resolving '$DOMAIN/A/IN'
tags: [dnssec, dns, forward, security]
---

## dns forward failed ##
- Error message:
```
28-Oct-2022 09:49:09.251 managed-keys-zone: Key 20326 for zone . is now trusted (acceptance timer complete)
28-Oct-2022 09:49:09.490 resolver priming query complete: success
28-Oct-2022 09:49:14.088 chase DS servers resolving 'bdc500.com/DS/IN': 192.168.5.104#53
28-Oct-2022 09:49:15.003 insecurity proof failed resolving 'bdc500.com/A/IN': 192.168.5.104#53
28-Oct-2022 09:50:46.782 connection refused resolving 'bdc500.com/A/IN': 192.168.5.104#53
28-Oct-2022 09:50:51.070 validating bdc500.com/A: got insecure response; parent indicates it should be secure
28-Oct-2022 09:50:51.070 insecurity proof failed resolving 'bdc500.com/A/IN': 192.168.5.104#53
```


- Solution

it is because dnssec without key, the simpliest way is :
```
dnssec-validation no;
```


- reference
  - [Trust Anchors](https://dnsinstitute.com/documentation/dnssec-guide/ch03s04.html#how-trust-anchors-are-used)
