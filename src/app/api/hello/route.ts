import { NextResponse } from 'next/server'
import { myContainer } from "@/inversify.config"
import { Warrior } from "@/interfaces"
import { TYPES } from "@/types"

export async function GET() {
  const ninja = myContainer.get<Warrior>(TYPES.Warrior)
  
  return NextResponse.json(
    {
      message: ninja.fight()
    },
    {
      status: 200
    }
  )
}
