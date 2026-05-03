---
layout: course
title: "UE19CS322: Big Data"
description: Undergraduate course covering distributed computing, large-scale data processing, and big data frameworks including Hadoop and Spark. Topics included MapReduce, HDFS, iterative graph algorithms, Spark DataFrames, and Spark Streaming with MLlib.
instructor: "Dr. KV Subramaniam, Dr. Prafullata K Auradkar, Prof. Animesh Giri"
year: 2021
term: Fall
location: PES University, Bengaluru
course_id: ue19cs322-big-data
schedule:
  - week: 4
    date: Sep 2
    topic: "A0: Word Count using MapReduce"
    description: "Ungraded mandatory assignment to verify Hadoop installation. Students ran a MapReduce job to count word occurrences in *Alice in Wonderland* by Lewis Carroll."
    materials:
      - name: Assignment Spec
        url: /teachings/ue19cs322-big-data/a0/
      - name: Hadoop Installation Guide
        url: /teachings/ue19cs322-big-data/hadoop/

  - week: 4
    date: Sep 2
    topic: "A1: Analysis of US Road Accident Data"
    description: "2-task MapReduce assignment analyzing a large US road accident dataset. Tasks involved record count per hour and multi-attribute filtering with sorted output."
    materials:
      - name: Assignment Spec
        url: /teachings/ue19cs322-big-data/a1/

  - week: 10
    date: Oct 9
    topic: "A2: PageRank with Graph Embeddings for Wikipedia"
    description: "2-task iterative MapReduce assignment implementing a modified PageRank on an English Wikipedia hyperlink network (2013 snapshot, SNAP). Incorporated cosine similarity between page embeddings into rank contribution."
    materials:
      - name: Assignment Spec
        url: /teachings/ue19cs322-big-data/a2/

  - week: 12
    date: Oct 25
    topic: "A3: Earth Surface Temperature Analysis using Spark"
    description: "2-task Spark DataFrame assignment analyzing Berkeley Earth surface temperature data (1750–present). Tasks involved city-level and country-level temperature comparisons against global averages."
    materials:
      - name: Assignment Spec
        url: /teachings/ue19cs322-big-data/a3/
      - name: Spark Installation Guide
        url: /teachings/ue19cs322-big-data/spark/

  - week: 13
    date: Nov 1
    topic: "Project 1: Yet Another Hadoop (YAH)"
    description: "Students built a mini-HDFS from scratch in Python, replicating the NameNode/DataNode architecture with data replication and Hadoop-style job scheduling."
    materials:
      - name: Project Spec
        url: /teachings/ue19cs322-big-data/yah/

  - week: 13
    date: Nov 1
    topic: "Project 2: Machine Learning with Spark Streaming"
    description: "Students applied incremental machine learning on large data streams using PySpark MLlib and Spark Streaming, simulating real-world constrained batch processing scenarios."
    materials:
      - name: Project Spec
        url: /teachings/ue19cs322-big-data/mlss/
---

## Role

Teaching Assistant under [Dr. KV Subramaniam](https://www.linkedin.com/in/kalsubra/), [Dr. Prafullata K Auradkar](https://www.linkedin.com/in/prafullata-auradkar-23882a57/), and [Prof. Animesh Giri](https://www.linkedin.com/in/animesh-giri-15272531) at PES University during the Fall 2021 semester. Part of a four-person TA team alongside [Vishesh Purnananda](https://www.linkedin.com/in/vishesh-p17/), [Ansh Sarkar](https://www.linkedin.com/in/sarkaransh/), and [Pavan Appanna](https://www.linkedin.com/in/pavan-a/).

## Responsibilities

- Designed and graded 4 assignments and 2 projects for 600+ enrolled students
- Built and maintained a custom submission portal with automated evaluation pipelines
- Delivered hands-on lab sessions on Hadoop and Spark setup and configuration
- Conducted beta testing phases and managed changelogs for assignment releases

## Course Website

[github.com/Cloud-Computing-Big-Data/cloud-computing-big-data.github.io](https://github.com/Cloud-Computing-Big-Data/cloud-computing-big-data.github.io)

The original course website is permanently down. This page and its linked materials are an archive of the last released version of the course content, preserved here for reference. No further updates will be made.
