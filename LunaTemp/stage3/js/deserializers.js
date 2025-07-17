var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i212 = root || request.c( 'UnityEngine.JointSpring' )
  var i213 = data
  i212.spring = i213[0]
  i212.damper = i213[1]
  i212.targetPosition = i213[2]
  return i212
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i214 = root || request.c( 'UnityEngine.JointMotor' )
  var i215 = data
  i214.m_TargetVelocity = i215[0]
  i214.m_Force = i215[1]
  i214.m_FreeSpin = i215[2]
  return i214
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i216 = root || request.c( 'UnityEngine.JointLimits' )
  var i217 = data
  i216.m_Min = i217[0]
  i216.m_Max = i217[1]
  i216.m_Bounciness = i217[2]
  i216.m_BounceMinVelocity = i217[3]
  i216.m_ContactDistance = i217[4]
  i216.minBounce = i217[5]
  i216.maxBounce = i217[6]
  return i216
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i218 = root || request.c( 'UnityEngine.JointDrive' )
  var i219 = data
  i218.m_PositionSpring = i219[0]
  i218.m_PositionDamper = i219[1]
  i218.m_MaximumForce = i219[2]
  i218.m_UseAcceleration = i219[3]
  return i218
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i220 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i221 = data
  i220.m_Spring = i221[0]
  i220.m_Damper = i221[1]
  return i220
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i222 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i223 = data
  i222.m_Limit = i223[0]
  i222.m_Bounciness = i223[1]
  i222.m_ContactDistance = i223[2]
  return i222
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i224 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i225 = data
  i224.m_ExtremumSlip = i225[0]
  i224.m_ExtremumValue = i225[1]
  i224.m_AsymptoteSlip = i225[2]
  i224.m_AsymptoteValue = i225[3]
  i224.m_Stiffness = i225[4]
  return i224
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i226 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i227 = data
  i226.m_LowerAngle = i227[0]
  i226.m_UpperAngle = i227[1]
  return i226
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i228 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i229 = data
  i228.m_MotorSpeed = i229[0]
  i228.m_MaximumMotorTorque = i229[1]
  return i228
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i230 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i231 = data
  i230.m_DampingRatio = i231[0]
  i230.m_Frequency = i231[1]
  i230.m_Angle = i231[2]
  return i230
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i232 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i233 = data
  i232.m_LowerTranslation = i233[0]
  i232.m_UpperTranslation = i233[1]
  return i232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i235 = data
  i234.name = i235[0]
  i234.index = i235[1]
  i234.startup = !!i235[2]
  return i234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i237 = data
  i236.position = new pc.Vec3( i237[0], i237[1], i237[2] )
  i236.scale = new pc.Vec3( i237[3], i237[4], i237[5] )
  i236.rotation = new pc.Quat(i237[6], i237[7], i237[8], i237[9])
  return i236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i239 = data
  i238.enabled = !!i239[0]
  i238.aspect = i239[1]
  i238.orthographic = !!i239[2]
  i238.orthographicSize = i239[3]
  i238.backgroundColor = new pc.Color(i239[4], i239[5], i239[6], i239[7])
  i238.nearClipPlane = i239[8]
  i238.farClipPlane = i239[9]
  i238.fieldOfView = i239[10]
  i238.depth = i239[11]
  i238.clearFlags = i239[12]
  i238.cullingMask = i239[13]
  i238.rect = i239[14]
  request.r(i239[15], i239[16], 0, i238, 'targetTexture')
  i238.usePhysicalProperties = !!i239[17]
  i238.focalLength = i239[18]
  i238.sensorSize = new pc.Vec2( i239[19], i239[20] )
  i238.lensShift = new pc.Vec2( i239[21], i239[22] )
  i238.gateFit = i239[23]
  i238.commandBufferCount = i239[24]
  i238.cameraType = i239[25]
  return i238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i241 = data
  i240.name = i241[0]
  i240.tagId = i241[1]
  i240.enabled = !!i241[2]
  i240.isStatic = !!i241[3]
  i240.layer = i241[4]
  return i240
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i242 = root || request.c( 'AudioManager' )
  var i243 = data
  request.r(i243[0], i243[1], 0, i242, 'library')
  i242.sfxPoolSize = i243[2]
  return i242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i245 = data
  i244.ambientIntensity = i245[0]
  i244.reflectionIntensity = i245[1]
  i244.ambientMode = i245[2]
  i244.ambientLight = new pc.Color(i245[3], i245[4], i245[5], i245[6])
  i244.ambientSkyColor = new pc.Color(i245[7], i245[8], i245[9], i245[10])
  i244.ambientGroundColor = new pc.Color(i245[11], i245[12], i245[13], i245[14])
  i244.ambientEquatorColor = new pc.Color(i245[15], i245[16], i245[17], i245[18])
  i244.fogColor = new pc.Color(i245[19], i245[20], i245[21], i245[22])
  i244.fogEndDistance = i245[23]
  i244.fogStartDistance = i245[24]
  i244.fogDensity = i245[25]
  i244.fog = !!i245[26]
  request.r(i245[27], i245[28], 0, i244, 'skybox')
  i244.fogMode = i245[29]
  var i247 = i245[30]
  var i246 = []
  for(var i = 0; i < i247.length; i += 1) {
    i246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i247[i + 0]) );
  }
  i244.lightmaps = i246
  i244.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i245[31], i244.lightProbes)
  i244.lightmapsMode = i245[32]
  i244.mixedBakeMode = i245[33]
  i244.environmentLightingMode = i245[34]
  i244.ambientProbe = new pc.SphericalHarmonicsL2(i245[35])
  i244.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i245[36])
  i244.useReferenceAmbientProbe = !!i245[37]
  request.r(i245[38], i245[39], 0, i244, 'customReflection')
  request.r(i245[40], i245[41], 0, i244, 'defaultReflection')
  i244.defaultReflectionMode = i245[42]
  i244.defaultReflectionResolution = i245[43]
  i244.sunLightObjectId = i245[44]
  i244.pixelLightCount = i245[45]
  i244.defaultReflectionHDR = !!i245[46]
  i244.hasLightDataAsset = !!i245[47]
  i244.hasManualGenerate = !!i245[48]
  return i244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i251 = data
  request.r(i251[0], i251[1], 0, i250, 'lightmapColor')
  request.r(i251[2], i251[3], 0, i250, 'lightmapDirection')
  return i250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i252 = root || new UnityEngine.LightProbes()
  var i253 = data
  return i252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i260 = root || new pc.UnityMaterial()
  var i261 = data
  i260.name = i261[0]
  request.r(i261[1], i261[2], 0, i260, 'shader')
  i260.renderQueue = i261[3]
  i260.enableInstancing = !!i261[4]
  var i263 = i261[5]
  var i262 = []
  for(var i = 0; i < i263.length; i += 1) {
    i262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i263[i + 0]) );
  }
  i260.floatParameters = i262
  var i265 = i261[6]
  var i264 = []
  for(var i = 0; i < i265.length; i += 1) {
    i264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i265[i + 0]) );
  }
  i260.colorParameters = i264
  var i267 = i261[7]
  var i266 = []
  for(var i = 0; i < i267.length; i += 1) {
    i266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i267[i + 0]) );
  }
  i260.vectorParameters = i266
  var i269 = i261[8]
  var i268 = []
  for(var i = 0; i < i269.length; i += 1) {
    i268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i269[i + 0]) );
  }
  i260.textureParameters = i268
  var i271 = i261[9]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i271[i + 0]) );
  }
  i260.materialFlags = i270
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i275 = data
  i274.name = i275[0]
  i274.value = i275[1]
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i279 = data
  i278.name = i279[0]
  i278.value = new pc.Color(i279[1], i279[2], i279[3], i279[4])
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i283 = data
  i282.name = i283[0]
  i282.value = new pc.Vec4( i283[1], i283[2], i283[3], i283[4] )
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i287 = data
  i286.name = i287[0]
  request.r(i287[1], i287[2], 0, i286, 'value')
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i291 = data
  i290.name = i291[0]
  i290.enabled = !!i291[1]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i293 = data
  var i295 = i293[0]
  var i294 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i295.length; i += 1) {
    i294.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i295[i + 0]));
  }
  i292.ShaderCompilationErrors = i294
  i292.name = i293[1]
  i292.guid = i293[2]
  var i297 = i293[3]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( i297[i + 0] );
  }
  i292.shaderDefinedKeywords = i296
  var i299 = i293[4]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i299[i + 0]) );
  }
  i292.passes = i298
  var i301 = i293[5]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i301[i + 0]) );
  }
  i292.usePasses = i300
  var i303 = i293[6]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i303[i + 0]) );
  }
  i292.defaultParameterValues = i302
  request.r(i293[7], i293[8], 0, i292, 'unityFallbackShader')
  i292.readDepth = !!i293[9]
  i292.isCreatedByShaderGraph = !!i293[10]
  i292.compiled = !!i293[11]
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i307 = data
  i306.shaderName = i307[0]
  i306.errorMessage = i307[1]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i312 = root || new pc.UnityShaderPass()
  var i313 = data
  i312.id = i313[0]
  i312.subShaderIndex = i313[1]
  i312.name = i313[2]
  i312.passType = i313[3]
  i312.grabPassTextureName = i313[4]
  i312.usePass = !!i313[5]
  i312.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[6], i312.zTest)
  i312.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[7], i312.zWrite)
  i312.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[8], i312.culling)
  i312.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i313[9], i312.blending)
  i312.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i313[10], i312.alphaBlending)
  i312.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[11], i312.colorWriteMask)
  i312.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[12], i312.offsetUnits)
  i312.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[13], i312.offsetFactor)
  i312.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[14], i312.stencilRef)
  i312.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[15], i312.stencilReadMask)
  i312.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i313[16], i312.stencilWriteMask)
  i312.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i313[17], i312.stencilOp)
  i312.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i313[18], i312.stencilOpFront)
  i312.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i313[19], i312.stencilOpBack)
  var i315 = i313[20]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i315[i + 0]) );
  }
  i312.tags = i314
  var i317 = i313[21]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( i317[i + 0] );
  }
  i312.passDefinedKeywords = i316
  var i319 = i313[22]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i319[i + 0]) );
  }
  i312.passDefinedKeywordGroups = i318
  var i321 = i313[23]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i321[i + 0]) );
  }
  i312.variants = i320
  var i323 = i313[24]
  var i322 = []
  for(var i = 0; i < i323.length; i += 1) {
    i322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i323[i + 0]) );
  }
  i312.excludedVariants = i322
  i312.hasDepthReader = !!i313[25]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i325 = data
  i324.val = i325[0]
  i324.name = i325[1]
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i327 = data
  i326.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[0], i326.src)
  i326.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[1], i326.dst)
  i326.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i327[2], i326.op)
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i329 = data
  i328.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i329[0], i328.pass)
  i328.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i329[1], i328.fail)
  i328.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i329[2], i328.zFail)
  i328.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i329[3], i328.comp)
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i333 = data
  i332.name = i333[0]
  i332.value = i333[1]
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i337 = data
  var i339 = i337[0]
  var i338 = []
  for(var i = 0; i < i339.length; i += 1) {
    i338.push( i339[i + 0] );
  }
  i336.keywords = i338
  i336.hasDiscard = !!i337[1]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i343 = data
  i342.passId = i343[0]
  i342.subShaderIndex = i343[1]
  var i345 = i343[2]
  var i344 = []
  for(var i = 0; i < i345.length; i += 1) {
    i344.push( i345[i + 0] );
  }
  i342.keywords = i344
  i342.vertexProgram = i343[3]
  i342.fragmentProgram = i343[4]
  i342.exportedForWebGl2 = !!i343[5]
  i342.readDepth = !!i343[6]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i349 = data
  request.r(i349[0], i349[1], 0, i348, 'shader')
  i348.pass = i349[2]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i353 = data
  i352.name = i353[0]
  i352.type = i353[1]
  i352.value = new pc.Vec4( i353[2], i353[3], i353[4], i353[5] )
  i352.textureValue = i353[6]
  i352.shaderPropertyFlag = i353[7]
  return i352
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i354 = root || request.c( 'AudioLibrary' )
  var i355 = data
  var i357 = i355[0]
  var i356 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i357.length; i += 1) {
    i356.add(request.d('AudioLibrary+ClipEntry', i357[i + 0]));
  }
  i354.clips = i356
  return i354
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i360 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i361 = data
  i360.key = i361[0]
  i360.channel = i361[1]
  request.r(i361[2], i361[3], 0, i360, 'clip')
  i360.volume = i361[4]
  i360.loop = !!i361[5]
  return i360
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i362 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i363 = data
  i362.useSafeMode = !!i363[0]
  i362.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i363[1], i362.safeModeOptions)
  i362.timeScale = i363[2]
  i362.unscaledTimeScale = i363[3]
  i362.useSmoothDeltaTime = !!i363[4]
  i362.maxSmoothUnscaledTime = i363[5]
  i362.rewindCallbackMode = i363[6]
  i362.showUnityEditorReport = !!i363[7]
  i362.logBehaviour = i363[8]
  i362.drawGizmos = !!i363[9]
  i362.defaultRecyclable = !!i363[10]
  i362.defaultAutoPlay = i363[11]
  i362.defaultUpdateType = i363[12]
  i362.defaultTimeScaleIndependent = !!i363[13]
  i362.defaultEaseType = i363[14]
  i362.defaultEaseOvershootOrAmplitude = i363[15]
  i362.defaultEasePeriod = i363[16]
  i362.defaultAutoKill = !!i363[17]
  i362.defaultLoopType = i363[18]
  i362.debugMode = !!i363[19]
  i362.debugStoreTargetId = !!i363[20]
  i362.showPreviewPanel = !!i363[21]
  i362.storeSettingsLocation = i363[22]
  i362.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i363[23], i362.modules)
  i362.createASMDEF = !!i363[24]
  i362.showPlayingTweens = !!i363[25]
  i362.showPausedTweens = !!i363[26]
  return i362
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i364 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i365 = data
  i364.logBehaviour = i365[0]
  i364.nestedTweenFailureBehaviour = i365[1]
  return i364
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i366 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i367 = data
  i366.showPanel = !!i367[0]
  i366.audioEnabled = !!i367[1]
  i366.physicsEnabled = !!i367[2]
  i366.physics2DEnabled = !!i367[3]
  i366.spriteEnabled = !!i367[4]
  i366.uiEnabled = !!i367[5]
  i366.textMeshProEnabled = !!i367[6]
  i366.tk2DEnabled = !!i367[7]
  i366.deAudioEnabled = !!i367[8]
  i366.deUnityExtendedEnabled = !!i367[9]
  i366.epoOutlineEnabled = !!i367[10]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i369 = data
  var i371 = i369[0]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i371[i + 0]) );
  }
  i368.files = i370
  i368.componentToPrefabIds = i369[1]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i375 = data
  i374.path = i375[0]
  request.r(i375[1], i375[2], 0, i374, 'unityObject')
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i377 = data
  var i379 = i377[0]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i379[i + 0]) );
  }
  i376.scriptsExecutionOrder = i378
  var i381 = i377[1]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i381[i + 0]) );
  }
  i376.sortingLayers = i380
  var i383 = i377[2]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i383[i + 0]) );
  }
  i376.cullingLayers = i382
  i376.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i377[3], i376.timeSettings)
  i376.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i377[4], i376.physicsSettings)
  i376.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i377[5], i376.physics2DSettings)
  i376.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i377[6], i376.qualitySettings)
  i376.enableRealtimeShadows = !!i377[7]
  i376.enableAutoInstancing = !!i377[8]
  i376.enableDynamicBatching = !!i377[9]
  i376.lightmapEncodingQuality = i377[10]
  i376.desiredColorSpace = i377[11]
  var i385 = i377[12]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( i385[i + 0] );
  }
  i376.allTags = i384
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i389 = data
  i388.name = i389[0]
  i388.value = i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i393 = data
  i392.id = i393[0]
  i392.name = i393[1]
  i392.value = i393[2]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i397 = data
  i396.id = i397[0]
  i396.name = i397[1]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i399 = data
  i398.fixedDeltaTime = i399[0]
  i398.maximumDeltaTime = i399[1]
  i398.timeScale = i399[2]
  i398.maximumParticleTimestep = i399[3]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i401 = data
  i400.gravity = new pc.Vec3( i401[0], i401[1], i401[2] )
  i400.defaultSolverIterations = i401[3]
  i400.bounceThreshold = i401[4]
  i400.autoSyncTransforms = !!i401[5]
  i400.autoSimulation = !!i401[6]
  var i403 = i401[7]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i403[i + 0]) );
  }
  i400.collisionMatrix = i402
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i407 = data
  i406.enabled = !!i407[0]
  i406.layerId = i407[1]
  i406.otherLayerId = i407[2]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i409 = data
  request.r(i409[0], i409[1], 0, i408, 'material')
  i408.gravity = new pc.Vec2( i409[2], i409[3] )
  i408.positionIterations = i409[4]
  i408.velocityIterations = i409[5]
  i408.velocityThreshold = i409[6]
  i408.maxLinearCorrection = i409[7]
  i408.maxAngularCorrection = i409[8]
  i408.maxTranslationSpeed = i409[9]
  i408.maxRotationSpeed = i409[10]
  i408.baumgarteScale = i409[11]
  i408.baumgarteTOIScale = i409[12]
  i408.timeToSleep = i409[13]
  i408.linearSleepTolerance = i409[14]
  i408.angularSleepTolerance = i409[15]
  i408.defaultContactOffset = i409[16]
  i408.autoSimulation = !!i409[17]
  i408.queriesHitTriggers = !!i409[18]
  i408.queriesStartInColliders = !!i409[19]
  i408.callbacksOnDisable = !!i409[20]
  i408.reuseCollisionCallbacks = !!i409[21]
  i408.autoSyncTransforms = !!i409[22]
  var i411 = i409[23]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i411[i + 0]) );
  }
  i408.collisionMatrix = i410
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i415 = data
  i414.enabled = !!i415[0]
  i414.layerId = i415[1]
  i414.otherLayerId = i415[2]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i417 = data
  var i419 = i417[0]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i419[i + 0]) );
  }
  i416.qualityLevels = i418
  var i421 = i417[1]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( i421[i + 0] );
  }
  i416.names = i420
  i416.shadows = i417[2]
  i416.anisotropicFiltering = i417[3]
  i416.antiAliasing = i417[4]
  i416.lodBias = i417[5]
  i416.shadowCascades = i417[6]
  i416.shadowDistance = i417[7]
  i416.shadowmaskMode = i417[8]
  i416.shadowProjection = i417[9]
  i416.shadowResolution = i417[10]
  i416.softParticles = !!i417[11]
  i416.softVegetation = !!i417[12]
  i416.activeColorSpace = i417[13]
  i416.desiredColorSpace = i417[14]
  i416.masterTextureLimit = i417[15]
  i416.maxQueuedFrames = i417[16]
  i416.particleRaycastBudget = i417[17]
  i416.pixelLightCount = i417[18]
  i416.realtimeReflectionProbes = !!i417[19]
  i416.shadowCascade2Split = i417[20]
  i416.shadowCascade4Split = new pc.Vec3( i417[21], i417[22], i417[23] )
  i416.streamingMipmapsActive = !!i417[24]
  i416.vSyncCount = i417[25]
  i416.asyncUploadBufferSize = i417[26]
  i416.asyncUploadTimeSlice = i417[27]
  i416.billboardsFaceCameraPosition = !!i417[28]
  i416.shadowNearPlaneOffset = i417[29]
  i416.streamingMipmapsMemoryBudget = i417[30]
  i416.maximumLODLevel = i417[31]
  i416.streamingMipmapsAddAllCameras = !!i417[32]
  i416.streamingMipmapsMaxLevelReduction = i417[33]
  i416.streamingMipmapsRenderersPerFrame = i417[34]
  i416.resolutionScalingFixedDPIFactor = i417[35]
  i416.streamingMipmapsMaxFileIORequests = i417[36]
  i416.currentQualityLevel = i417[37]
  return i416
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"8":[9],"10":[9],"11":[9],"12":[9],"13":[9],"14":[9],"15":[16],"17":[1],"18":[19],"20":[19],"21":[19],"22":[19],"23":[19],"24":[19],"25":[19],"26":[27],"28":[27],"29":[27],"30":[27],"31":[27],"32":[27],"33":[27],"34":[27],"35":[27],"36":[27],"37":[27],"38":[27],"39":[27],"40":[1],"41":[42],"43":[44],"45":[44],"46":[47],"48":[1],"49":[19],"50":[51],"52":[47],"53":[47],"54":[46],"55":[56,47],"57":[47],"58":[46],"59":[47],"60":[47],"61":[47],"62":[47],"63":[47],"64":[47],"65":[47],"66":[47],"67":[47],"68":[56,47],"69":[47],"70":[47],"71":[47],"72":[47],"73":[56,47],"74":[47],"75":[76],"77":[76],"78":[76],"79":[76],"80":[1],"81":[1],"82":[83],"84":[1],"85":[47],"86":[42,47],"87":[47,56],"88":[47],"89":[56,47],"90":[42],"91":[56,47],"92":[47]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","AudioManager","AudioLibrary","UnityEngine.Shader","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","CameraAspectFitter","Bullet","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "07/17/2025 06:16:56";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "31087";

Deserializers.projectId = "25cf7bcc16a03234c9bd68200ba66e30";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "12451676-bb6a-4fec-b65d-1b851343206d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

