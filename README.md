# n.dat

I'm not good with readme files so im just gonna write how to use it.

## Contents
1. [Notes](#notes)
2. [How does it work?](#how-does-it-work)
3. [Usage](#usage)
    1. [Command Line](#command-line)
        1. [Advanced](#advanced)

## Notes
 - When using your own exclude rules, you must add `node_modules/*` to that. Passing your own exclude rules overrides the default.

## How does it work?
Ndat does the following when creating a dat file:
1. Calculates all file locations recursively
2. Detects the charset of all files
3. Creates a json file for each folder at root and sub-directories containing information about files using utf8
4. If chunks are on, creates chunk files for all files not using the charset utf8 and links them in the json files
5. Verifies created files.
6. Puts them all in a folder, compresses them, and deletes all the temp files.


## Usage

### Command Line
First you need to run `npm i ndat -g`. Then, to create a simple dat file, run `ndat .` (presuming your current working directory is the package you are building).

#### Advanced
Here is a list of arguments. You can also put these in a configuration file and use the `--config <path>` argument to recognise it.

| **Argument** | **Config Property** | **Description** | **Default** |
|:---:|:---:|:---:|:---:|
| \-\-config \<file\> |  | Use a config file instead of args | none |
| \-\-output / \-o \<file\> | "output": "path/to/file\.dat" | Set an output file\. | ndat/package\.dat |
| \-\-nochunks / \-nc | "chunks": true\|false | Don't parse files that don't use the utf8 charset into buffer chunk files\. Put their buffer straight into an info file\. |  |
| \-\-exclude "\<pattern\>" | "exclude":"pattern" | Pattern of files to exclude\. | "\["node\_modules/\*", "ndat/\*", "dist/\*"\]" |
| \-\-temp / \-t \<path\> | "temp": "path/to/temp/folder" | Specify the directory to use for temp files\. | \./temp |
