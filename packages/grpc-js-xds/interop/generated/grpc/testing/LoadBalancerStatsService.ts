// Original file: proto/grpc/testing/test.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoadBalancerAccumulatedStatsRequest as _grpc_testing_LoadBalancerAccumulatedStatsRequest, LoadBalancerAccumulatedStatsRequest__Output as _grpc_testing_LoadBalancerAccumulatedStatsRequest__Output } from '../../grpc/testing/LoadBalancerAccumulatedStatsRequest';
import type { LoadBalancerAccumulatedStatsResponse as _grpc_testing_LoadBalancerAccumulatedStatsResponse, LoadBalancerAccumulatedStatsResponse__Output as _grpc_testing_LoadBalancerAccumulatedStatsResponse__Output } from '../../grpc/testing/LoadBalancerAccumulatedStatsResponse';
import type { LoadBalancerStatsRequest as _grpc_testing_LoadBalancerStatsRequest, LoadBalancerStatsRequest__Output as _grpc_testing_LoadBalancerStatsRequest__Output } from '../../grpc/testing/LoadBalancerStatsRequest';
import type { LoadBalancerStatsResponse as _grpc_testing_LoadBalancerStatsResponse, LoadBalancerStatsResponse__Output as _grpc_testing_LoadBalancerStatsResponse__Output } from '../../grpc/testing/LoadBalancerStatsResponse';

/**
 * A service used to obtain stats for verifying LB behavior.
 */
export interface LoadBalancerStatsServiceClient extends grpc.Client {
  /**
   * Gets the accumulated stats for RPCs sent by a test client.
   */
  GetClientAccumulatedStats(argument: _grpc_testing_LoadBalancerAccumulatedStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>): grpc.ClientUnaryCall;
  GetClientAccumulatedStats(argument: _grpc_testing_LoadBalancerAccumulatedStatsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>): grpc.ClientUnaryCall;
  GetClientAccumulatedStats(argument: _grpc_testing_LoadBalancerAccumulatedStatsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>): grpc.ClientUnaryCall;
  GetClientAccumulatedStats(argument: _grpc_testing_LoadBalancerAccumulatedStatsRequest, callback: grpc.requestCallback<_grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>): grpc.ClientUnaryCall;
  /**
   * Gets the accumulated stats for RPCs sent by a test client.
   */
  getClientAccumulatedStats(argument: _grpc_testing_LoadBalancerAccumulatedStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>): grpc.ClientUnaryCall;
  getClientAccumulatedStats(argument: _grpc_testing_LoadBalancerAccumulatedStatsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>): grpc.ClientUnaryCall;
  getClientAccumulatedStats(argument: _grpc_testing_LoadBalancerAccumulatedStatsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>): grpc.ClientUnaryCall;
  getClientAccumulatedStats(argument: _grpc_testing_LoadBalancerAccumulatedStatsRequest, callback: grpc.requestCallback<_grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>): grpc.ClientUnaryCall;
  
  /**
   * Gets the backend distribution for RPCs sent by a test client.
   */
  GetClientStats(argument: _grpc_testing_LoadBalancerStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_testing_LoadBalancerStatsResponse__Output>): grpc.ClientUnaryCall;
  GetClientStats(argument: _grpc_testing_LoadBalancerStatsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpc_testing_LoadBalancerStatsResponse__Output>): grpc.ClientUnaryCall;
  GetClientStats(argument: _grpc_testing_LoadBalancerStatsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_testing_LoadBalancerStatsResponse__Output>): grpc.ClientUnaryCall;
  GetClientStats(argument: _grpc_testing_LoadBalancerStatsRequest, callback: grpc.requestCallback<_grpc_testing_LoadBalancerStatsResponse__Output>): grpc.ClientUnaryCall;
  /**
   * Gets the backend distribution for RPCs sent by a test client.
   */
  getClientStats(argument: _grpc_testing_LoadBalancerStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_testing_LoadBalancerStatsResponse__Output>): grpc.ClientUnaryCall;
  getClientStats(argument: _grpc_testing_LoadBalancerStatsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpc_testing_LoadBalancerStatsResponse__Output>): grpc.ClientUnaryCall;
  getClientStats(argument: _grpc_testing_LoadBalancerStatsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_testing_LoadBalancerStatsResponse__Output>): grpc.ClientUnaryCall;
  getClientStats(argument: _grpc_testing_LoadBalancerStatsRequest, callback: grpc.requestCallback<_grpc_testing_LoadBalancerStatsResponse__Output>): grpc.ClientUnaryCall;
  
}

/**
 * A service used to obtain stats for verifying LB behavior.
 */
export interface LoadBalancerStatsServiceHandlers extends grpc.UntypedServiceImplementation {
  /**
   * Gets the accumulated stats for RPCs sent by a test client.
   */
  GetClientAccumulatedStats: grpc.handleUnaryCall<_grpc_testing_LoadBalancerAccumulatedStatsRequest__Output, _grpc_testing_LoadBalancerAccumulatedStatsResponse>;
  
  /**
   * Gets the backend distribution for RPCs sent by a test client.
   */
  GetClientStats: grpc.handleUnaryCall<_grpc_testing_LoadBalancerStatsRequest__Output, _grpc_testing_LoadBalancerStatsResponse>;
  
}

export interface LoadBalancerStatsServiceDefinition extends grpc.ServiceDefinition {
  GetClientAccumulatedStats: MethodDefinition<_grpc_testing_LoadBalancerAccumulatedStatsRequest, _grpc_testing_LoadBalancerAccumulatedStatsResponse, _grpc_testing_LoadBalancerAccumulatedStatsRequest__Output, _grpc_testing_LoadBalancerAccumulatedStatsResponse__Output>
  GetClientStats: MethodDefinition<_grpc_testing_LoadBalancerStatsRequest, _grpc_testing_LoadBalancerStatsResponse, _grpc_testing_LoadBalancerStatsRequest__Output, _grpc_testing_LoadBalancerStatsResponse__Output>
}
