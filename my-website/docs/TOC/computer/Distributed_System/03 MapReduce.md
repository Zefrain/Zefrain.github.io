# MapReduce: Simplified Data Processing on Large Clusters

## Abstract

a programming model and an associated implementation for processing and generating large data sets.

- *map* function processes a key/value pair to generate a set of intermediate key/value pairs, 

- *reduce* function merges all intermediate values associated with the same intermediate key.

## 2 Programming Model



![image-20230402150335147](./MapReduce.assets/image-20230402150335147.png)

### 2.1 Example

pseudo-code:

```
map(String key, String value):
	// key: document name
	// value: document contents
for each word w in value:
	EmitIntermediate(w, "1");

reduce(String key, Iterator values):
	// key: a word
	// values: a list of counts
	int result = 0;
	for each v in values:
		result += ParseInt(v);
	Emit(AsString(result));
```

### 2.2 Types

map      (k1, v1)        ----> list (k2, v2)

reduce (k2, list(v2)) ----> list(v2)

## 3 Implementation

## 3.1Execution Overview

1. split into pieces
2. master picks idle workers and assigns tasks 
3. assigned worker reads input split.
4. partitioned into *R* regions and write buffered pairs to local disk periodically.
5. a reduce worker uses RPC to read buffered data from the local disks of the map workers
6. reduce worker iterates over, append the output of the *Reduce* function to a final output file for this reduce partition.
7. the master wakes up the user program after workers completed.

### 3.2 Master Data Structures

for each map task and reduce task: state (*idle*, *in-progress* or *completed*), and the identity of the worker machine (for non-idle tasks)

for each completed map task: the locations and sizes of the *R* intermediate file regions produced by the map task

### 3.3. Fault Tolerance

#### Worker Failure

The master pings every worker periodically. 

Completed map tasks are re-executed on a failure because their output is stored on the local disks of the failed machine that is therefore inaccessible. Completed reduce tasks stored their output in a global file system.

When a map task is executed twice or more, all worker executing reduce tasks are notified of the re-execution. Any reduce task that has not already read will read the data from later machine.

#### Master Failure

make the master write periodic checkpoints, when it dies, started from the last checkpointed state.

#### Semantics in the Presence of Failures

