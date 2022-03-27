# System Design Concepts

## Index
- [[#Scale Cube]]
- [[#CAP Theorem]]

## Contents

### Scale Cube

Scale Cube defines different approaches to scale a system. If you consider all the directions of the cube, it corresponds to the 3 different types of ways how a given system can be scaled.
 - x-axis: Horizontal Scaling
 - y-axis: Vertical Scaling(Functional Decomposition)
 - z-axis: Depth Scaling

![[Pasted image 20220327000953.png]]

### CAP Theorem

![[Pasted image 20220328004402.png]]

In a distributed computer system, you can only support two of the following guarantees:

-   **Consistency** - Every read receives the most recent write or an error
-   **Availability** - Every request receives a response, without guarantee that it contains the most recent version of the information
-   **Partition Tolerance** - The system continues to operate despite arbitrary partitioning due to network failures

_Networks aren't reliable, so you'll need to support partition tolerance. You'll need to make a software tradeoff between consistency and availability._

**Beyond CAP Theorem**
- **PACELC Theorem**
	- If partition then available or consistency else Latency or Consistency 
- **Amazon's PIE Theorem**
	- Pattern Flexibility, Infinite Scale and Efficiency in choosing different distributed system in AWS
