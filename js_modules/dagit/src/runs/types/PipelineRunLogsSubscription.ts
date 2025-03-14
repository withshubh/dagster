// @generated
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LogLevel, DagsterEventType, ErrorSource, ObjectStoreOperationType } from "./../../types/globalTypes";

// ====================================================
// GraphQL subscription operation: PipelineRunLogsSubscription
// ====================================================

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepSkippedEvent {
  __typename: "ExecutionStepSkippedEvent" | "ExecutionStepStartEvent" | "ExecutionStepSuccessEvent" | "ExecutionStepUpForRetryEvent" | "ExecutionStepRestartEvent" | "LogMessageEvent" | "PipelineStartEvent" | "PipelineEnqueuedEvent" | "PipelineDequeuedEvent" | "PipelineStartingEvent" | "PipelineCancelingEvent" | "PipelineCanceledEvent" | "PipelineSuccessEvent" | "HookCompletedEvent" | "HookSkippedEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_assetKey {
  __typename: "AssetKey";
  path: string[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number;
}

export type PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventPathMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventJsonMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventUrlMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventTextMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventMarkdownMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventPythonArtifactMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventFloatMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries_EventIntMetadataEntry;

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization {
  __typename: "Materialization";
  assetKey: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_assetKey | null;
  label: string;
  description: string | null;
  metadataEntries: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization_metadataEntries[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent {
  __typename: "StepMaterializationEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  materialization: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent_materialization;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineInitFailureEvent_error_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineInitFailureEvent_error {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineInitFailureEvent_error_cause | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineInitFailureEvent {
  __typename: "PipelineInitFailureEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  error: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineInitFailureEvent_error;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineFailureEvent_pipelineFailureError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineFailureEvent_pipelineFailureError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineFailureEvent_pipelineFailureError_cause | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineFailureEvent {
  __typename: "PipelineFailureEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  pipelineFailureError: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineFailureEvent_pipelineFailureError | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_error_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_error {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_error_cause | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number;
}

export type PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventPathMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventJsonMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventUrlMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventTextMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventMarkdownMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventPythonArtifactMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventFloatMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries_EventIntMetadataEntry;

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata {
  __typename: "FailureMetadata";
  metadataEntries: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata_metadataEntries[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent {
  __typename: "ExecutionStepFailureEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  error: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_error;
  errorSource: ErrorSource | null;
  failureMetadata: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent_failureMetadata | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number;
}

export type PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventPathMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventJsonMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventUrlMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventTextMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventMarkdownMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventPythonArtifactMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventFloatMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries_EventIntMetadataEntry;

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck {
  __typename: "TypeCheck";
  label: string;
  description: string | null;
  success: boolean;
  metadataEntries: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck_metadataEntries[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent {
  __typename: "ExecutionStepInputEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  inputName: string;
  typeCheck: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent_typeCheck;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number;
}

export type PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventPathMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventJsonMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventUrlMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventTextMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventMarkdownMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventPythonArtifactMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventFloatMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries_EventIntMetadataEntry;

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck {
  __typename: "TypeCheck";
  label: string;
  description: string | null;
  success: boolean;
  metadataEntries: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck_metadataEntries[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent {
  __typename: "ExecutionStepOutputEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  outputName: string;
  typeCheck: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent_typeCheck;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number;
}

export type PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventPathMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventJsonMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventUrlMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventTextMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventMarkdownMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventPythonArtifactMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventFloatMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries_EventIntMetadataEntry;

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult {
  __typename: "ExpectationResult";
  success: boolean;
  label: string;
  description: string | null;
  metadataEntries: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult_metadataEntries[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent {
  __typename: "StepExpectationResultEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  expectationResult: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent_expectationResult;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number;
}

export type PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventPathMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventJsonMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventUrlMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventTextMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventMarkdownMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventPythonArtifactMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventFloatMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries_EventIntMetadataEntry;

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult {
  __typename: "ObjectStoreOperationResult";
  op: ObjectStoreOperationType;
  metadataEntries: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult_metadataEntries[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent {
  __typename: "ObjectStoreOperationEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  operationResult: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent_operationResult;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_HandledOutputEvent {
  __typename: "HandledOutputEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  outputName: string;
  managerKey: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_LoadedInputEvent {
  __typename: "LoadedInputEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  inputName: string;
  managerKey: string;
  upstreamOutputName: string | null;
  upstreamStepKey: string | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventPathMetadataEntry {
  __typename: "EventPathMetadataEntry";
  label: string;
  description: string | null;
  path: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventJsonMetadataEntry {
  __typename: "EventJsonMetadataEntry";
  label: string;
  description: string | null;
  jsonString: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventUrlMetadataEntry {
  __typename: "EventUrlMetadataEntry";
  label: string;
  description: string | null;
  url: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventTextMetadataEntry {
  __typename: "EventTextMetadataEntry";
  label: string;
  description: string | null;
  text: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventMarkdownMetadataEntry {
  __typename: "EventMarkdownMetadataEntry";
  label: string;
  description: string | null;
  mdStr: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventPythonArtifactMetadataEntry {
  __typename: "EventPythonArtifactMetadataEntry";
  label: string;
  description: string | null;
  module: string;
  name: string;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventFloatMetadataEntry {
  __typename: "EventFloatMetadataEntry";
  label: string;
  description: string | null;
  floatValue: number;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventIntMetadataEntry {
  __typename: "EventIntMetadataEntry";
  label: string;
  description: string | null;
  intValue: number;
}

export type PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventPathMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventJsonMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventUrlMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventTextMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventMarkdownMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventPythonArtifactMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventFloatMetadataEntry | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries_EventIntMetadataEntry;

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_engineError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_engineError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_engineError_cause | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent {
  __typename: "EngineEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  metadataEntries: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_metadataEntries[];
  engineError: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent_engineError | null;
  markerStart: string | null;
  markerEnd: string | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_HookErroredEvent_error_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_HookErroredEvent_error {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_HookErroredEvent_error_cause | null;
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_HookErroredEvent {
  __typename: "HookErroredEvent";
  runId: string;
  message: string;
  timestamp: string;
  level: LogLevel;
  stepKey: string | null;
  eventType: DagsterEventType | null;
  error: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_HookErroredEvent_error;
}

export type PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepSkippedEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepMaterializationEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineInitFailureEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_PipelineFailureEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepFailureEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepInputEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ExecutionStepOutputEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_StepExpectationResultEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_ObjectStoreOperationEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_HandledOutputEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_LoadedInputEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_EngineEvent | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages_HookErroredEvent;

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess {
  __typename: "PipelineRunLogsSubscriptionSuccess";
  messages: PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess_messages[];
}

export interface PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionFailure {
  __typename: "PipelineRunLogsSubscriptionFailure";
  missingRunId: string | null;
  message: string;
}

export type PipelineRunLogsSubscription_pipelineRunLogs = PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionSuccess | PipelineRunLogsSubscription_pipelineRunLogs_PipelineRunLogsSubscriptionFailure;

export interface PipelineRunLogsSubscription {
  pipelineRunLogs: PipelineRunLogsSubscription_pipelineRunLogs;
}

export interface PipelineRunLogsSubscriptionVariables {
  runId: string;
  after?: any | null;
}
