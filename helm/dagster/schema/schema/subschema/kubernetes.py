from enum import Enum
from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Extra  # pylint: disable=no-name-in-module

from .utils import SupportedKubernetes, create_definition_ref


class Annotations(BaseModel):
    __root__: Dict[str, str]

    class Config:
        schema_extra = {
            "$ref": create_definition_ref(
                "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta/properties/annotations"
            )
        }


class Labels(BaseModel):
    class Config:
        schema_extra = {
            "$ref": create_definition_ref(
                "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta/properties/labels"
            )
        }


class PullPolicy(str, Enum):
    ALWAYS = "Always"
    IF_NOT_PRESENT = "IfNotPresent"
    NEVER = "Never"


class Image(BaseModel):
    repository: str
    tag: str
    pullPolicy: PullPolicy

    @property
    def name(self) -> str:
        return f"{self.repository}:{self.tag}"


class ImageWithRegistry(BaseModel):
    registry: str
    repository: str
    tag: str
    pullPolicy: PullPolicy


class Service(BaseModel):
    type: str
    port: int
    annotations: Optional[Annotations]

    class Config:
        extra = Extra.forbid


class NodeSelector(BaseModel):
    __root__: Dict[str, str]

    class Config:
        schema_extra = {
            "$ref": create_definition_ref("io.k8s.api.core.v1.PodSpec/properties/nodeSelector")
        }


class Affinity(BaseModel):
    __root__: Dict[str, Any]

    class Config:
        schema_extra = {"$ref": create_definition_ref("io.k8s.api.core.v1.Affinity")}


class Tolerations(BaseModel):
    __root__: List[Dict[str, Any]]

    class Config:
        schema_extra = {
            "$ref": create_definition_ref("io.k8s.api.core.v1.PodSpec/properties/tolerations")
        }


class PodSecurityContext(BaseModel):
    __root__: Dict[str, Any]

    class Config:
        schema_extra = {"$ref": create_definition_ref("io.k8s.api.core.v1.PodSecurityContext")}


class SecurityContext(BaseModel):
    __root__: Dict[str, Any]

    class Config:
        schema_extra = {"$ref": create_definition_ref("io.k8s.api.core.v1.SecurityContext")}


class Resources(BaseModel):
    __root__: Dict[str, Any]

    class Config:
        schema_extra = {"$ref": create_definition_ref("io.k8s.api.core.v1.ResourceRequirements")}


class LivenessProbe(BaseModel):
    class Config:
        schema_extra = {"$ref": create_definition_ref("io.k8s.api.core.v1.Probe")}


class StartupProbe(BaseModel):
    class Config:
        schema_extra = {
            "$ref": create_definition_ref(
                "io.k8s.api.core.v1.Probe",
                version=SupportedKubernetes.V1_16,
            )
        }


class SecretRef(BaseModel):
    class Config:
        schema_extra = {"$ref": create_definition_ref("io.k8s.api.core.v1.LocalObjectReference")}


class SecretEnvSource(BaseModel):
    class Config:
        schema_extra = {"$ref": create_definition_ref("io.k8s.api.core.v1.SecretEnvSource")}


class ConfigMapEnvSource(BaseModel):
    class Config:
        schema_extra = {"$ref": create_definition_ref("io.k8s.api.core.v1.ConfigMapEnvSource")}
