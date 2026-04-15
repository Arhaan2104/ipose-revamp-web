"use client";

import { useState } from "react";
import DashboardTopbar from "@/components/layout/DashboardTopbar";
import { DEAL_STAGES } from "@/lib/constants";
import { mockDeals } from "@/lib/mock-data";
import { Deal, DealStage } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import Link from "next/link";
import { AlertTriangle, Battery, Clock, User } from "lucide-react";

export default function PipelinePage() {
  const [deals, setDeals] = useState<Deal[]>(mockDeals);

  const getDealsByStage = (stage: DealStage) =>
    deals.filter((d) => d.stage === stage);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const dealId = result.draggableId;
    const newStage = result.destination.droppableId as DealStage;

    setDeals((prev) =>
      prev.map((d) =>
        d.id === dealId
          ? {
              ...d,
              stage: newStage,
              updatedAt: new Date().toISOString(),
              stageHistory: [
                ...d.stageHistory,
                { stage: newStage, enteredAt: new Date().toISOString() },
              ],
            }
          : d
      )
    );
  };

  return (
    <>
      <DashboardTopbar title="Deal Pipeline" />
      <div className="p-6 overflow-x-auto">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex gap-4 min-w-max pb-4">
            {DEAL_STAGES.map((stage) => {
              const stageDeals = getDealsByStage(stage.key);
              return (
                <Droppable key={stage.key} droppableId={stage.key}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`w-72 flex-shrink-0 rounded-2xl transition-colors ${
                        snapshot.isDraggingOver
                          ? "bg-gold/10 border-2 border-gold/30"
                          : "bg-white border border-cream-dark"
                      }`}
                    >
                      {/* Column header */}
                      <div className="px-4 py-3 border-b border-cream-dark flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2.5 h-2.5 rounded-full ${stage.bgColor}`}
                          />
                          <span className="text-sm font-semibold text-navy-dark">
                            {stage.label}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-navy-dark/40 bg-cream px-2 py-0.5 rounded-full">
                          {stageDeals.length}
                        </span>
                      </div>

                      {/* Cards */}
                      <div className="p-3 space-y-3 min-h-[120px]">
                        {stageDeals.map((deal, index) => (
                          <Draggable
                            key={deal.id}
                            draggableId={deal.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`rounded-xl border p-4 transition-all cursor-grab active:cursor-grabbing ${
                                  snapshot.isDragging
                                    ? "shadow-xl border-gold bg-white rotate-2"
                                    : "border-cream-dark bg-cream/50 hover:bg-white hover:shadow-sm"
                                }`}
                              >
                                <Link
                                  href={`/dashboard/deals/${deal.id}`}
                                  onClick={(e) => {
                                    if (snapshot.isDragging) e.preventDefault();
                                  }}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm font-semibold text-navy-dark">
                                      {deal.car.make} {deal.car.model}
                                    </p>
                                    <span className="text-[10px] text-navy-dark/30 font-mono">
                                      {deal.id}
                                    </span>
                                  </div>

                                  <p className="text-xs text-navy-dark/50 mb-3">
                                    {deal.car.year} &middot;{" "}
                                    {deal.car.registrationNumber}
                                  </p>

                                  {/* Battery SoH bar */}
                                  <div className="mb-3">
                                    <div className="flex items-center justify-between text-[10px] mb-1">
                                      <span className="flex items-center gap-1 text-navy-dark/40">
                                        <Battery className="w-3 h-3" /> SoH
                                      </span>
                                      <span className="font-semibold text-navy-dark">
                                        {deal.car.batteryHealth.stateOfHealth}%
                                      </span>
                                    </div>
                                    <div className="h-1.5 bg-cream-dark rounded-full overflow-hidden">
                                      <div
                                        className={`h-full rounded-full ${
                                          deal.car.batteryHealth.stateOfHealth >=
                                          90
                                            ? "bg-green-500"
                                            : deal.car.batteryHealth
                                                .stateOfHealth >= 80
                                            ? "bg-yellow-500"
                                            : "bg-red-500"
                                        }`}
                                        style={{
                                          width: `${deal.car.batteryHealth.stateOfHealth}%`,
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-navy-dark">
                                      {formatCurrency(
                                        deal.car.aiValuation ??
                                          deal.car.listPrice
                                      )}
                                    </span>
                                    <div className="flex items-center gap-2">
                                      {deal.issues.length > 0 && (
                                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                                      )}
                                      <div className="flex items-center gap-1 text-[10px] text-navy-dark/40">
                                        <User className="w-3 h-3" />
                                        {deal.seller.name.split(" ")[0]}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    </div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}
