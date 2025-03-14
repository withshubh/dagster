// @generated
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum BulkActionStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REQUESTED = "REQUESTED",
}

export enum ComputeIOType {
  STDERR = "STDERR",
  STDOUT = "STDOUT",
}

export enum DagsterEventType {
  ASSET_STORE_OPERATION = "ASSET_STORE_OPERATION",
  ENGINE_EVENT = "ENGINE_EVENT",
  HANDLED_OUTPUT = "HANDLED_OUTPUT",
  HOOK_COMPLETED = "HOOK_COMPLETED",
  HOOK_ERRORED = "HOOK_ERRORED",
  HOOK_SKIPPED = "HOOK_SKIPPED",
  LOADED_INPUT = "LOADED_INPUT",
  OBJECT_STORE_OPERATION = "OBJECT_STORE_OPERATION",
  PIPELINE_CANCELED = "PIPELINE_CANCELED",
  PIPELINE_CANCELING = "PIPELINE_CANCELING",
  PIPELINE_DEQUEUED = "PIPELINE_DEQUEUED",
  PIPELINE_ENQUEUED = "PIPELINE_ENQUEUED",
  PIPELINE_FAILURE = "PIPELINE_FAILURE",
  PIPELINE_INIT_FAILURE = "PIPELINE_INIT_FAILURE",
  PIPELINE_START = "PIPELINE_START",
  PIPELINE_STARTING = "PIPELINE_STARTING",
  PIPELINE_SUCCESS = "PIPELINE_SUCCESS",
  STEP_EXPECTATION_RESULT = "STEP_EXPECTATION_RESULT",
  STEP_FAILURE = "STEP_FAILURE",
  STEP_INPUT = "STEP_INPUT",
  STEP_MATERIALIZATION = "STEP_MATERIALIZATION",
  STEP_OUTPUT = "STEP_OUTPUT",
  STEP_RESTARTED = "STEP_RESTARTED",
  STEP_SKIPPED = "STEP_SKIPPED",
  STEP_START = "STEP_START",
  STEP_SUCCESS = "STEP_SUCCESS",
  STEP_UP_FOR_RETRY = "STEP_UP_FOR_RETRY",
}

export enum ErrorSource {
  FRAMEWORK_ERROR = "FRAMEWORK_ERROR",
  INTERRUPT = "INTERRUPT",
  UNEXPECTED_ERROR = "UNEXPECTED_ERROR",
  USER_CODE_ERROR = "USER_CODE_ERROR",
}

export enum EvaluationErrorReason {
  FIELDS_NOT_DEFINED = "FIELDS_NOT_DEFINED",
  FIELD_NOT_DEFINED = "FIELD_NOT_DEFINED",
  MISSING_REQUIRED_FIELD = "MISSING_REQUIRED_FIELD",
  MISSING_REQUIRED_FIELDS = "MISSING_REQUIRED_FIELDS",
  RUNTIME_TYPE_MISMATCH = "RUNTIME_TYPE_MISMATCH",
  SELECTOR_FIELD_ERROR = "SELECTOR_FIELD_ERROR",
}

export enum JobStatus {
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

export enum JobTickStatus {
  FAILURE = "FAILURE",
  SKIPPED = "SKIPPED",
  STARTED = "STARTED",
  SUCCESS = "SUCCESS",
}

export enum JobType {
  SCHEDULE = "SCHEDULE",
  SENSOR = "SENSOR",
}

export enum LocationStateChangeEventType {
  LOCATION_DISCONNECTED = "LOCATION_DISCONNECTED",
  LOCATION_ERROR = "LOCATION_ERROR",
  LOCATION_RECONNECTED = "LOCATION_RECONNECTED",
  LOCATION_UPDATED = "LOCATION_UPDATED",
}

export enum LogLevel {
  CRITICAL = "CRITICAL",
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
}

export enum ObjectStoreOperationType {
  CP_OBJECT = "CP_OBJECT",
  GET_OBJECT = "GET_OBJECT",
  RM_OBJECT = "RM_OBJECT",
  SET_OBJECT = "SET_OBJECT",
}

export enum PipelineRunStatus {
  CANCELED = "CANCELED",
  CANCELING = "CANCELING",
  FAILURE = "FAILURE",
  MANAGED = "MANAGED",
  NOT_STARTED = "NOT_STARTED",
  QUEUED = "QUEUED",
  STARTED = "STARTED",
  STARTING = "STARTING",
  SUCCESS = "SUCCESS",
}

export enum StepEventStatus {
  FAILURE = "FAILURE",
  SKIPPED = "SKIPPED",
  SUCCESS = "SUCCESS",
}

export enum StepKind {
  COMPUTE = "COMPUTE",
  UNRESOLVED = "UNRESOLVED",
}

export enum TerminatePipelinePolicy {
  MARK_AS_CANCELED_IMMEDIATELY = "MARK_AS_CANCELED_IMMEDIATELY",
  SAFE_TERMINATE = "SAFE_TERMINATE",
}

export interface AssetKeyInput {
  path: string[];
}

export interface ExecutionMetadata {
  runId?: string | null;
  tags?: ExecutionTag[] | null;
  rootRunId?: string | null;
  parentRunId?: string | null;
}

export interface ExecutionParams {
  selector: PipelineSelector;
  runConfigData?: any | null;
  mode?: string | null;
  executionMetadata?: ExecutionMetadata | null;
  stepKeys?: string[] | null;
  preset?: string | null;
}

export interface ExecutionTag {
  key: string;
  value: string;
}

export interface JobSelector {
  repositoryName: string;
  repositoryLocationName: string;
  jobName: string;
}

export interface PartitionBackfillParams {
  selector: PartitionSetSelector;
  partitionNames: string[];
  reexecutionSteps?: string[] | null;
  fromFailure?: boolean | null;
  tags?: ExecutionTag[] | null;
  forceSynchronousSubmission?: boolean | null;
}

export interface PartitionSetSelector {
  partitionSetName: string;
  repositorySelector: RepositorySelector;
}

export interface PipelineRunsFilter {
  runIds?: (string | null)[] | null;
  pipelineName?: string | null;
  tags?: ExecutionTag[] | null;
  statuses?: PipelineRunStatus[] | null;
  snapshotId?: string | null;
}

export interface PipelineSelector {
  pipelineName: string;
  repositoryName: string;
  repositoryLocationName: string;
  solidSelection?: string[] | null;
}

export interface RepositorySelector {
  repositoryName: string;
  repositoryLocationName: string;
}

export interface ScheduleSelector {
  repositoryName: string;
  repositoryLocationName: string;
  scheduleName: string;
}

export interface SensorSelector {
  repositoryName: string;
  repositoryLocationName: string;
  sensorName: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
