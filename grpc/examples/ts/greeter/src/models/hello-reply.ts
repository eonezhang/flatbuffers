// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class HelloReply {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):HelloReply {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHelloReply(bb:flatbuffers.ByteBuffer, obj?:HelloReply):HelloReply {
  return (obj || new HelloReply()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHelloReply(bb:flatbuffers.ByteBuffer, obj?:HelloReply):HelloReply {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HelloReply()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

message():string|null
message(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
message(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startHelloReply(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addMessage(builder:flatbuffers.Builder, messageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, messageOffset, 0);
}

static endHelloReply(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createHelloReply(builder:flatbuffers.Builder, messageOffset:flatbuffers.Offset):flatbuffers.Offset {
  HelloReply.startHelloReply(builder);
  HelloReply.addMessage(builder, messageOffset);
  return HelloReply.endHelloReply(builder);
}

serialize():Uint8Array {
  return this.bb!.bytes();
}

static deserialize(buffer: Uint8Array):HelloReply {
  return HelloReply.getRootAsHelloReply(new flatbuffers.ByteBuffer(buffer))
}
}
